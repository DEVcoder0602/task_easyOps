"use client"

import HomeListing from "@/components/listing/HomeListing";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <>
        <div className="container">
          APP
          <HomeListing />
        </div>
      </>
    </Provider>
  );
}
