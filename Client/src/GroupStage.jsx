import React from 'react';
import './GroupStage.css'
export default function CustomizedTables() {

   
      return (
        <div class="container">
        <table>
            <thead>
                <tr>
                    <th>מקום</th>
                    <th>X</th>
                    <th>משתתף 1</th>
                    <th>משתתף 2</th>
                    <th>משתתף 3</th>
               
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>משתתף 1</td>
                    <td>X</td>
                    <td>1vc2</td>
                    <td>1vc3</td>
                </tr>
                <tr>
                    <td></td>
                    <td>משתתף 2</td>
                    <td>2vc1</td>
                    <td>X</td>
                    <td>2vc3</td>
                </tr>
                <tr>
                    <td></td>
                    <td>משתתף 3</td>
                    <td>3vc1</td>
                    <td>3vc2</td>
                    <td>X</td>
                </tr>
               
            </tbody>
        </table>
    </div>
  
    
  
    
  );
}