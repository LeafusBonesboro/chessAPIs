// src/scenes/dashboard/RecentAssignments.jsx

import { Box, Typography } from "@mui/material";
import { mockTransactions } from "../../data/mockData";

const RecentAssignments = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="600" p="15px">
        Recent Assignments
      </Typography>
      {mockTransactions.map((transaction, i) => (
        <Box
          key={`${transaction.txId}-${i}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #ccc"
          p="10px"
        >
          <Typography variant="body1">
            {transaction.txId} - {transaction.user}
          </Typography>
          <Typography variant="body1">{transaction.date}</Typography>
          <Typography variant="body1">${transaction.cost}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default RecentAssignments;
