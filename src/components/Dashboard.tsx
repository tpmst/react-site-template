// src/Dashboard.tsx
import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Sample data for the chart
const data = [
  { name: "Jan", sales: 4000, revenue: 2400 },
  { name: "Feb", sales: 3000, revenue: 2210 },
  { name: "Mar", sales: 2000, revenue: 2290 },
  { name: "Apr", sales: 2780, revenue: 2000 },
  { name: "May", sales: 1890, revenue: 2181 },
  { name: "Jun", sales: 2390, revenue: 2500 },
  { name: "Jul", sales: 3490, revenue: 2100 },
];

// Sample statistics data
const stats = [
  { title: "Total Sales", value: "$24,000" },
  { title: "New Users", value: "1,200" },
  { title: "Revenue", value: "$15,000" },
  { title: "Expenses", value: "$8,000" },
];

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Statistics Cards */}
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardHeader title={stat.title} />
              <CardContent>
                <Typography variant="h5">{stat.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Line Chart */}
        <Grid item xs={12}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6" gutterBottom>
              Sales and Revenue Trend
            </Typography>
            <LineChart width={800} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
