import { create } from 'zustand'

interface BearState {
  bears: number
  increasePopulation: (by: number) => void
}
const useBearStore = create<BearState>()((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  }))