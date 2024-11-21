import type { Routine } from "@/models/Routine";
import type { RoutineState } from "@/models/RoutineState";
import { defineStore } from "pinia";

export const useRoutineStore = defineStore('routines', {
  state : () => ({
    // Creamos un array de rutinas vacío
    routines : [] as Routine[]
  }),

  actions : {

    addRoutine (routine: Routine) : void {
      this.routines.push(routine)
    },

    getRoutine (id: string): Routine | undefined {
      return this.routines.find(routine => routine.id === id) as Routine
    },

    updateRoutineState (id: string, newState: RoutineState) : void {
      const routine = this.getRoutine(id)
      // Si la rutina existe, actualizamos su estado
      if(routine){
        routine.setState(newState)
      }
    }
  },
})
