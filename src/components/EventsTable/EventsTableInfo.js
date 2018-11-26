import React from 'react';
import { Table } from 'reactstrap';

function EventsTableInfo(props) {
    return (
        <div className="fixed-td">
             <Table className="table table-bordered">
                <thead>
                    <tr><th className="text-center">Время</th>
                </tr></thead>
                <tbody>
                    <tr>
                        <td className="text-center">
                            <strong>1 пара</strong>
                            <p>7:45 - 9:20</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            <strong>2 пара</strong>
                            <p>9:30 - 11:05</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            <strong>3 пара</strong>
                            <p>11:15 - 12:50</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            <strong>4 пара</strong>
                            <p>13:10 - 14:45</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            <strong>5 пара</strong>
                            <p>14:55 - 16:30</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            <strong>6 пара</strong>
                            <p>16:40 - 18:15</p>
                        </td>
                    </tr>
                </tbody>
            </Table>       
        </div>
    );
}

export default EventsTableInfo;