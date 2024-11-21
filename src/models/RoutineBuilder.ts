import { Routine } from "@/models/Routine";
import type { RoutineState } from "./RoutineState";
// Patron usado: Builder, patron creacional

export class RoutineBuilder {
  private routine : Routine

  constructor () {
    this.routine = new Routine()
  }

  setName (name: string): this{
    this.routine.name = name
    return this
  }

  setType (type:   'strength' | 'cardio' | 'mixed' ) : this {
    this.routine.type = type
    return this
  }

  setState(state: RoutineState): this {
    this.routine.setState(state)
    return this
  }

  build (): Routine {
    return this.routine
  }
}
