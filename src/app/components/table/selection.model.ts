import { Subject } from 'rxjs'

export interface SelectionChange<T> {
  source: SelectionModel<T>
  added: T[]
  removed: T[]
}

export class SelectionModel<T> {
  private _selection = new Set<T>()
  private _deselectedToEmit: T[] = []
  private _selectedToEmit: T[] = []
  private _selected: T[] | null = []
  private _data: T[] = []

  readonly changed = new Subject<SelectionChange<T>>()

  constructor(
    private _multiple = false,
    initiallySelectedValues?: T[],
    private _emitChanges = true
  ) {
    if (_multiple) {
      initiallySelectedValues?.forEach((value) => this._markSelected(value))
    }
  }

  get selected(): T[] {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values())
    }

    return this._selected
  }

  select(...values: T[]): void {
    this._verifyValueAssigment(values)
    values.forEach((value) => this._markSelected(value))
    this._emitChangeEvent()
  }

  deselect(...values: T[]): void {
    this._verifyValueAssigment(values)
    values.forEach((value) => this._unmarkSelected(value))
    this._emitChangeEvent()
  }

  toggle(value: T): void {
    this.isSelected(value) ? this.deselect(value) : this.select(value)
  }

  clear(): void {
    this._unmarkAll()
    this._emitChangeEvent()
  }

  isSelected(value: T): boolean {
    return this._selection.has(value)
  }

  isEmpty(): boolean {
    return this._selection.size === 0
  }

  hasValue(): boolean {
    return !this.isEmpty()
  }

  setData(data: T[]): void {
    this._data = data
  }

  isAllSelected(): boolean {
    return this._selected?.length === this._data?.length
  }

  masterToggle(): void {
    if (this.isAllSelected()) {
      this.clear()
      return
    }

    this.select(...this._data)
  }

  private _emitChangeEvent() {
    this._selected = null

    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit,
      })

      this._deselectedToEmit = []
      this._selectedToEmit = []
    }
  }

  private _markSelected(value: T) {
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll()
      }

      this._selection.add(value)

      if (this._emitChanges) {
        this._selectedToEmit.push(value)
      }
    }
  }

  private _unmarkSelected(value: T) {
    if (this.isSelected(value)) {
      this._selection.delete(value)

      if (this._emitChanges) {
        this._deselectedToEmit.push(value)
      }
    }
  }

  private _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach((value) => this._unmarkSelected(value))
    }
  }

  private _verifyValueAssigment(values: T[]) {
    if (values.length > 1 && !this._multiple) {
      throw this.getMultipleValuesInSingleSelectionError()
    }
  }

  getMultipleValuesInSingleSelectionError() {
    return Error(
      'Cannot pass multiple values into SelectionModel with single-value mode.'
    )
  }
}
