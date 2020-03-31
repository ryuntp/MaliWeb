/*!

=========================================================
* Paper Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Select from 'react-select';
import { NavLink } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";


const claimres = [
  { value: 'อนุมัติ', label: 'อนุมัติ' },
  { value: 'ไม่อนุมัติ', label: 'ไม่อนุมัติ' },
  { value: 'รอการอนุมัติ', label: 'รอการอนุมัติ' },
];

const shownum = [
  { value: 10, label: '10' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
];
class RegularTables extends React.Component {

  // for dmgtype option
  state = {
    selectedOption: 'รอการอนุมัติ',
    shownumOp : null
  };
  handleChange = ({selectedOption}) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  ShownumhandleChange = ({shownumOp}) => {
    this.setState({ shownumOp });
    console.log(`Option selected:`, shownumOp);
  };

  render() {
    const { selectedOption } = this.state;
    const { shownumOp } = this.state;

    const customStyles = {
      menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        color: state.selectProps.menuColor,
      }),
    
      control: (_, { selectProps: { width }}) => ({
        width: width
      }),
    
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
    
        return { ...provided, opacity, transition };
      }
    }
    return (
      <>
        <div className="content">
          <Row>
            {/* <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-right">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-right">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-right">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className="text-right">$56,142</td>
                      </tr>
                      <tr>
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td className="text-right">$38,735</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-right">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-right">$78,615</td>
                      </tr>
                      <tr>
                        <td>Jon Porter</td>
                        <td>Portugal</td>
                        <td>Gloucester</td>
                        <td className="text-right">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col> */}
            {/* <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table on Plain Background</CardTitle>
                  <p className="card-category">
                    Here is a subtitle for this table
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-right">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-right">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-right">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className="text-right">$56,142</td>
                      </tr>
                      <tr>
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td className="text-right">$38,735</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-right">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-right">$78,615</td>
                      </tr>
                      <tr>
                        <td>Jon Porter</td>
                        <td>Portugal</td>
                        <td>Gloucester</td>
                        <td className="text-right">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col> */}
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">คำร้อง</CardTitle>
                </CardHeader>
                <CardBody className="table-full-width table-hover">
                <Table>
                  <tr>
                <td md="1">show
               {<Select
                          styles = {customStyles}
                          value={shownumOp}
                          onChange={this.ShownumhandleChange}
                          options={shownum}
                          isSearchable={false}
                          />}
                          entries
                          </td> 
                    </tr>
                </Table>
                {/* <span>show {<Select
                          styles = {customStyles}
                          value={shownumOp}
                          onChange={this.ShownumhandleChange}
                          options={shownum}
                          isSearchable={false}
                          />} entries</span> */}
                  <Table responsive striped bordered>
                    {/* <thead>
                      <tr>
                        <th>show {<Select
                          value={shownumOp}
                          onChange={this.ShownumhandleChange}
                          options={shownum}
                          isSearchable={false}
                          />} entries</th>
                        <th>eiei</th>
                      </tr>
                    </thead> */}
                    <tbody>
                    <tr>
                        <th>ลำดับ</th>
                        <th>ชื่อ-สกุล</th>
                        <th>เบอร์โทร</th>
                        <th>วันที่ส่งคำร้อง</th>
                        <th>ประเภทภัย</th>
                        <th>จังหวัด</th>
                        <th>ผลการตรวจสอบ</th>
                        <th className="text-right">ดูข้อมูล</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>เกิดด มีผล</td>
                        <td>0855152525</td>
                        <td>23/4/62</td>
                        <td>ภัยแล้ง</td>
                        <td>ยะลา</td>
                        <td><Select
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={claimres}
                          isSearchable={false}
                          placeholder={"เลือก"}
                          InputValue={"รอการอนุมัติ"}
                          /></td>
                        <td className="text-right">
                        <NavLink to="/admin/dashboard" activeClassName="">
                      {/* <span className="sidebar-mini-icon">S</span> */}
                      <span >เรียกดูข้อมูล</span>
                    </NavLink>
                        </td>
                      </tr>
                      <tr>
                      <td>2</td>
                        <td>หนู อู้หู</td>
                        <td>0834443098</td>
                        <td>25/4/62</td>
                        <td>ภัยแล้ง</td>
                        <td>ตรัง</td>
                        <td><Select
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={claimres}
                          isSearchable={false}
                          placeholder={"เลือก"}
                          /></td>
                        <td className="text-right">
                        <NavLink to="/admin/dashboard" activeClassName="">
                      {/* <span className="sidebar-mini-icon">S</span> */}
                      <span >เรียกดูข้อมูล</span>
                    </NavLink>
                        </td>
                      </tr>
                      <tr>
                      <td>3</td>
                        <td>ไก่ แจ้</td>
                        <td>0595959403</td>
                        <td>21/5/62</td>
                        <td>ภัยแล้ง</td>
                        <td>สตูล</td>
                        <td><Select
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={claimres}
                          isSearchable={false}
                          placeholder={"เลือก"}
                          /></td>
                        <td className="text-right">
                        <NavLink to="/admin/dashboard" activeClassName="">
                      {/* <span className="sidebar-mini-icon">S</span> */}
                      <span >เรียกดูข้อมูล</span>
                    </NavLink>
                        </td>
                      </tr>
                      <tr>
                      <td>4</td>
                        <td>ไว้ลาย สมชาย</td>
                        <td>0850505054</td>
                        <td>01/4/62</td>
                        <td>ภัยแล้ง</td>
                        <td>เชียงใหม่</td>
                        <td><Select
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={claimres}
                          isSearchable={false}
                          placeholder={"เลือก"}
                          /></td>
                        <td className="text-right">
                        <NavLink to="/admin/dashboard" activeClassName="">
                      {/* <span className="sidebar-mini-icon">S</span> */}
                      <span >เรียกดูข้อมูล</span>
                    </NavLink>
                        </td>
                      </tr>
                      <tr>
                      <td>5</td>
                        <td>องอาจ ชาติเจริญ</td>
                        <td>0812929292</td>
                        <td>05/4/62</td>
                        <td>ภัยแล้ง</td>
                        <td>กรุงเทพ</td>
                        <td><Select
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={claimres}
                          isSearchable={false}
                          placeholder={"เลือก"}
                          /></td>
                        <td className="text-right">
                        <NavLink to="/admin/dashboard" activeClassName="">
                      {/* <span className="sidebar-mini-icon">S</span> */}
                      <span >เรียกดูข้อมูล</span>
                    </NavLink>
                        </td>
                      </tr>
                      <tr>
                      <td>6</td>
                        <td>โอ โหสิบ</td>
                        <td>0809393933</td>
                        <td>12/6/62</td>
                        <td>ภัยแล้ง</td>
                        <td>อยุธยา</td>
                        <td><Select
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={claimres}
                          isSearchable={false}
                          placeholder={"เลือก"}
                          /></td>
                        <td className="text-right">
                        <NavLink to="/admin/dashboard" activeClassName="">
                      {/* <span className="sidebar-mini-icon">S</span> */}
                      <span >เรียกดูข้อมูล</span>
                    </NavLink>
                        </td>
                      </tr>
                      <tr >
                      <td>7</td>
                        <td>เสี่ยโอเลี้ยง สิบบาท</td>
                        <td>0878594943</td>
                        <td>29/4/62</td>
                        <td>น้ำท่วม</td>
                        <td>ชลบุรี</td>
                        <td><Select
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={claimres}
                          isSearchable={false}
                          placeholder={"เลือก"}
                          /></td>
                        <td className="text-right">
                        <NavLink to="/admin/dashboard" activeClassName="">
                      {/* <span className="sidebar-mini-icon">S</span> */}
                      <span >เรียกดูข้อมูล</span>
                    </NavLink>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default RegularTables;
