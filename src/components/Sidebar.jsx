import React from "react";
import { Stack } from "@mui/system";
import { categories } from "../Utils/constants";

const Sidebar = ({selectedCategory,setSelectedCategory}) => (

  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((item) => (
      <button
        key={item.name}
        className="category-btn"
        style={{
          background: item.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        onClick={()=>setSelectedCategory(item.name)}
      >
        <span
          style={{
            color: item.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {item.icon}
        </span>
        <span style={{ opacity: item.name === selectedCategory ? "1" : "0.8" }}>
          {item.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
