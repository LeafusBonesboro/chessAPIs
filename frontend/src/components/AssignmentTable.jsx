// src/scenes/assignments/AssignmentTable.jsx

import React from 'react';

const assignments = [
    { id: 1, name: 'Task 1', description: 'Description 1', dueDate: '2024-07-01' },
    { id: 2, name: 'Task 2', description: 'Description 2', dueDate: '2024-07-02' },
    { id: 3, name: 'Task 3', description: 'Description 3', dueDate: '2024-07-03' },
];

const AssignmentTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>
                {assignments.map(assignment => (
                    <tr key={assignment.id}>
                        <td>{assignment.id}</td>
                        <td>{assignment.name}</td>
                        <td>{assignment.description}</td>
                        <td>{assignment.dueDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AssignmentTable;
