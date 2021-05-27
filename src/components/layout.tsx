import * as React from "react"

// import { rhythm } from "../utils/typography"

const MainLayout: React.FC = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 650,
    }}
  >
    {children}
  </div>
)

export default MainLayout