import { PausedState, type RoutineState } from "@/models/RoutineState"

export class Routine {
  id: string
  name: string
  type : 'strength' | 'cardio' | 'mixed'
  private state : RoutineState

  constructor (){
    this.id = crypto.randomUUID() // Generamos un id aleatorio
    this.name = ''
    this.type = 'strength'
    this.state = new PausedState()
  }

  setState (state: RoutineState): void {
    this.state = state
  }

  getState(): string {
    return this.state.handle()
  }
}
