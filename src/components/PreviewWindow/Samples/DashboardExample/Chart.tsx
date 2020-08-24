import React from "react"
import { useTheme } from "@material-ui/core/styles"
import Tooltip from "@material-ui/core/Tooltip"
import Typography from "@material-ui/core/Typography"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts"

// Generate Sales Data
function createData(time, amount) {
  return {
    time,
    amount,
    amount2: amount + Math.round(Math.random() * 1000),
    amount3: amount + Math.round(Math.random() * 2000),
  }
}

const data = [
  createData("00:00", 0),
  createData("03:00", 300),
  createData("06:00", 600),
  createData("09:00", 800),
  createData("12:00", 1500),
  createData("15:00", 2000),
  createData("18:00", 2400),
  createData("21:00", 2400),
  createData("24:00", undefined),
]

export default function Chart() {
  const theme = useTheme()

  return (
    <React.Fragment>
      <Tooltip
        title={`<Typography color="primary" variant="h6">`}
        placement="left"
        arrow
      >
        <Typography variant="h6" color="primary" gutterBottom>
          Today
        </Typography>
      </Tooltip>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="amount2"
            stroke={theme.palette.primary.light}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="amount3"
            stroke={theme.palette.primary.dark}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
