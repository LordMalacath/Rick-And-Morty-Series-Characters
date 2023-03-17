import Character from "pages/character/Character"
import Main from "pages/main/Main"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: ":id",
        element: <Character />
      }
    ]
  }
])