import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RankItem {
  id: number;
  name: string;
  image: string;
  type: string;
  num: string;
  hot: number;
}

interface RankState {
  list: RankItem[];
}

const initialState: RankState = {
  list: [],
};

const rankSlice = createSlice({
  name: 'rank',
  initialState,
  reducers: {
    setRankList(state, action: PayloadAction<RankItem[]>) {
      state.list = action.payload;
    },
  },
});

export const { setRankList } = rankSlice.actions;

export default rankSlice.reducer;