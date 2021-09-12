import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Holding {
  id: string;
  coinId: string;
  symbol: string;
  quantity: string;
  avgBuyPrice: string;
  notes?: string;
  addedAt: string;
}

interface HoldingsState {
  byId: Record<string, Holding>;
  order: string[];
}

const STORAGE_KEY = "crypto-portfolio.holdings.v1";

function loadInitial(): HoldingsState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as HoldingsState;
  } catch {}
  return { byId: {}, order: [] };
}

function persist(state: HoldingsState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

const slice = createSlice({
  name: "holdings",
  initialState: loadInitial(),
  reducers: {
    addHolding(state, action: PayloadAction<Holding>) {
      const h = action.payload;
      state.byId[h.id] = h;
      if (!state.order.includes(h.id)) state.order.push(h.id);
      persist(state);
    },
    removeHolding(state, action: PayloadAction<string>) {
      delete state.byId[action.payload];
      state.order = state.order.filter((id) => id !== action.payload);
      persist(state);
    },
    updateHolding(state, action: PayloadAction<Holding>) {
      state.byId[action.payload.id] = action.payload;
      persist(state);
    },
  },
});

export const { addHolding, removeHolding, updateHolding } = slice.actions;
export default slice.reducer;
