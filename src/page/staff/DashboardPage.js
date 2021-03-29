import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

import AppShell from "../../components/staff/appshell/AppShell";
import AppShellBreadcrumb from "../../components/staff/appshell/breadcrumb/AppShellBreadcrumb";

import ChartArea from "../../components/common/charts/ChartArea";
import ChartBar from "../../components/common/charts/ChartBar";
import ChartLine from "../../components/common/charts/ChartLine";
import ChartPie from "../../components/common/charts/ChartPie";
import StatCard from "../../components/common/StatCard";

const data = [
  { label: "Total Subscribers", value: "71,887" },
  { label: "Avg. Open Rate", value: "56.87%" },
  { label: "Avg. Click Rate", value: "12.87%" },
];

const links = [
  { name: "Home", url: "/" },
  { name: "Dashboard", url: "/admin" },
];

const chartAreaData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const chartBarData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const chartPieData1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const chartPieData2 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 200 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 300 },
];

const chartPieData3 = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 400 },
  { name: "Group D", value: 300 },
];

const chartLineData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const DashboardPage = () => {
  return (
    <AppShell>
      <Box maxW="7xl" mx="auto" py="6">
        {/* <AppShellBreadcrumb links={links} /> */}
        {/* Statistic */}
        <Heading mb="6">Dashboard</Heading>
        {/* <Box maxW="8xl" mx="auto" mb="10">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
            {data.map((stat, idx) => (
              <StatCard key={idx} data={stat} />
            ))}
          </SimpleGrid>
        </Box> */}
        {/* <Heading mb="6">Chart</Heading> */}
        {/* <Box maxW="8xl" mx="auto" mb="16">
          <SimpleGrid h="52" columns={{ base: 1, md: 3 }} spacing="6">
            <ChartPie data={chartPieData1} />
            <ChartPie data={chartPieData2} />
            <ChartPie data={chartPieData3} />
          </SimpleGrid>
        </Box> */}

        <SimpleGrid h="80" columns={2} gap="10" mb="20">
          <ChartPie data={chartPieData1} />
          <ChartArea data={chartAreaData} />
        </SimpleGrid>
        <SimpleGrid h="80" columns={2} gap="10">
          <ChartBar data={chartBarData} />
          <ChartLine data={chartLineData} />
        </SimpleGrid>
      </Box>
    </AppShell>
  );
};
