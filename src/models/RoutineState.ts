// Patron usado: State, patron de comportamiento
export interface RoutineState {
  handle (): string
}

export class InProgressState implements RoutineState {
  handle (): string {
    return 'La rutina está en progreso'
  }
}

export class CompletedState implements RoutineState {
  handle (): string {
    return 'La rutina ha sido completada'
  }
}

export class PausedState implements RoutineState {
  handle (): string {
    return 'La rutina está pausada'
  }
}

export class Routine {
  private state : RoutineState

  constructor () {
    this.state = new PausedState() // Hacemos que el estado inicial sea pausado
  }

  setState (state: RoutineState): void {
    this.state = state
  }

  getState () : string {
    return this.state.handle()
  }

}
