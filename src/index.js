import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./index.css";

import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

<Input
                        className="font-medium text-lg md:text-xl w-full"
                        value={newPlaylistName}
                        onChange={handleNameChange}
                        onBlur={saveChanges}
                        autoFocude
                        type="text"
                    />
                    <Button size="icon" variant="outline">
                        <FileEditIcon className="h-4 w-4" />
                        <span className="sr-only">Edit Playlist Name</span>
                    </Button>
