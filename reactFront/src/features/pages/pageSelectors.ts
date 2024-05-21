import { RootState } from "../../app/store";

export const selectActivePage = (state: RootState) => state.pages.activePage;
