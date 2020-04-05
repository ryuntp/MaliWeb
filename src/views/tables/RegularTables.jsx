import Select from "react-select";
import { NavLink } from "react-router-dom";
import React from "react";

import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroupText,
  InputGroupAddon,
  InputGroup
} from "reactstrap";

import { Tab } from "semantic-ui-react";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
const claimres = [
  { value: "อนุมัติ", label: "อนุมัติ" },
  { value: "ไม่อนุมัติ", label: "ไม่อนุมัติ" },
  { value: "รอการอนุมัติ", label: "รอการอนุมัติ" }
];

const shownum = [
  { value: 10, label: "10" },
  { value: 50, label: "50" },
  { value: 100, label: "100" }
];

const completeInfo = [
  { value: "ข้อมูลครบ", label: "ข้อมูลครบ" },
  { value: "ข้อมูลไม่ครบ", label: "ข้อมูลไม่ครบ" },
  { value: "รอการอนุมัติ", label: "รอการอนุมัติ" }
];

export default class RegularTables extends React.Component {
  // for status option
  state = {
    selectedOption: "รอการอนุมัติ",
    shownumOp: 10,
    completeInf: "รอการอนุมัติ"
  };

  handleChange = ({ selectedOption }) => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
  };

  ShownumhandleChange = ({ shownumOp }) => {
    this.setState({ shownumOp });
    // console.log(`Option selected:`, shownumOp);
  };

  CompleteInfohandleChange = ({ completeInf }) => {
    console.log("eiei");

    this.setState({ completeInf });
    console.log(`Option selected:`, completeInf);
  };

  render() {
    const { selectedOption } = this.state;
    const { shownumOp } = this.state;
    const { completeInf } = this.state;

    const { SearchBar } = Search;

    const products = [
      {
        id: 993,
        name: "ryuntp",
        tel: "0873269511",
        email: "ryu_r@hotmail.com",
        dmgType: "แล้ง",
        province: "กทม",
        result: "รอการอนุมัติ",
        rightInfo: "รอการอนุมัติ",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        )
      },
      {
        id: 1,
        name: "suthep",
        tel: "0837272626",
        email: "suthep@hotmail.com",
        dmgType: "ท่วม",
        province: "ฉะเชิงเทรา",
        result: "รอการอนุมัติ",
        rightInfo: "รอการอนุมัติ",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        )
      },
      {
        id: 4,
        name: "mali",
        tel: "0855555555",
        email: "mali@hotmail.com",
        dmgType: "แล้ง",
        province: "สงขลา",
        result: "รอการอนุมัติ",
        rightInfo: "รอการอนุมัติ",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        )
      },
      {
        id: 7,
        name: "boss",
        tel: "0850493939",
        email: "bossposeidon@hotmail.com",
        dmgType: "แล้ง",
        province: "ยะลา",
        result: "รอการอนุมัติ",
        rightInfo: "รอการอนุมัติ",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        )
      },
      {
        id: 11,
        name: "frong",
        tel: "0859203918",
        email: "frong@hotmail.com",
        dmgType: "ท่วม",
        province: "ประจวบ",
        result: "รอการอนุมัติ",
        rightInfo: "รอการอนุมัติ",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        )
      },
      {
        id: 3,
        name: "ryuntp",
        tel: "0873269511",
        email: "ryu_r@hotmail.com",
        dmgType: "แล้ง",
        province: "กทม",
        result: "รอการอนุมัติ",
        rightInfo: "รอการอนุมัติ",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        )
      },
      {
        id: 2,
        name: "ryuntp",
        tel: "0873269511",
        email: "ryu_r@hotmail.com",
        dmgType: "แล้ง",
        province: "กทม",
        result: "รอการอนุมัติ",
        rightInfo: "รอการอนุมัติ",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        )
      },
      {
        id: 8,
        name: "ryuntp",
        tel: "0873269511",
        email: "ryu_r@hotmail.com",
        dmgType: "แล้ง",
        province: "กทม",
        result: "รอการอนุมัติ",
        rightInfo: "รอการอนุมัติ",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        )
      },
      {
        id: 9,
        name: "ryuntp",
        tel: "0873269511",
        email: "ryu_r@hotmail.com",
        dmgType: "แล้ง",
        province: "กทม",
        result: "รอการอนุมัติ",
        rightInfo: "รอการอนุมัติ",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        )
      },
      {
        id: 111,
        name: "ryuntp",
        tel: "0873269511",
        email: "ryu_r@hotmail.com",
        dmgType: "แล้ง",
        province: "กทม",
        result: "รอการอนุมัติ",
        rightInfo: "รอการอนุมัติ",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        )
      },
      {
        id: 333,
        name: "วิชัย",
        tel: "0983726354",
        email: "wichai@hotmail.com",
        dmgType: "ท่วม",
        province: "สงขลา",
        result: "รอการอนุมัติ",
        rightInfo: "รอการอนุมัติ",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        )
      },
      {
        id: 123,
        name: "euei",
        tel: "0927461638",
        email: "reuei1998@gmail.com",
        dmgType: "แล้ง",
        province: "อยุธยา",
        result: "รอการอนุมัติ",
        rightInfo: "รอการอนุมัติ",
        details: (
          <NavLink to="/admin/dashboard" activeClassName="">
            <span>เรียกดูข้อมูล</span>
          </NavLink>
        )
      }
    ];
    const columns = [
      {
        dataField: "id",
        text: "ลำดับ",
        sort: true,
        style: { width: "5%" }
      },
      {
        dataField: "name",
        text: "ชื่อ-สกุล"
      },
      {
        dataField: "tel",
        text: "เบอร์โทร"
      },
      {
        dataField: "email",
        text: "อีเมล"
      },
      {
        dataField: "dmgType",
        text: "ประเภทภัย"
      },
      {
        dataField: "province",
        text: "จังหวัด"
      },
      {
        dataField: "result",
        text: "ผลการตรวจสอบ",
        editor: {
          type: Type.SELECT,
          options: [
            { value: "อนุมัติ", label: "อนุมัติ" },
            { value: "ไม่อนุมัติ", label: "ไม่อนุมัติ" },
            { value: "รอการอนุมัติ", label: "รอการอนุมัติ" }
          ]
        }
      },
      {
        dataField: "rightInfo",
        text: "ข้อมูลครบถ้วน",
        editor: {
          type: Type.SELECT,
          options: [
            { value: "ข้อมูลครบ", label: "ข้อมูลครบ" },
            { value: "ข้อมูลไม่ครบ", label: "ข้อมูลไม่ครบ" },
            { value: "รอการอนุมัติ", label: "รอการอนุมัติ" }
          ]
        }
      },
      {
        dataField: "details",
        text: "ดูข้อมูล"
      }
    ];
    // const rowStyle = row => {
    //   return {
    //     backgroundColor: row.rightInfo == "ข้อมูลไม่ครบ" ? "red" : "blue"
    //   };
    // };
    const rowStyle2 = (row, rowIndex) => {
      const style = {};
      if ((row.rightInfo = "ข้อมูลไม่ครบ")) {
        style.backgroundColor = "#f08a84";
      }
      // if (row.id > 2) {
      //   style.backgroundColor = "#f08a84";
      // }
      return style;
    };
    const searchStyle = { width: 250 }; // search bar style

    const panes = [
      {
        menuItem: "คำร้องขอทั้งหมด(7)",
        render: () => (
          <Tab.Pane>
            <div>
              <span></span>
              <Table responsive>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right">show</td>
                  <td>
                    {
                      <Select
                        placeholder={10}
                        value={shownumOp}
                        onChange={this.ShownumhandleChange}
                        options={shownum}
                        isSearchable={false}
                      />
                    }
                  </td>
                  <td>entries</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-right">search</td>
                  <td>
                    {
                      <Form inline>
                        <FormGroup>
                          <Input
                            className="rounded-pill"
                            alt="150x75"
                            type="search"
                            name="search"
                            id="exampleSearch"
                            placeholder="search placeholder"
                          />
                        </FormGroup>
                      </Form>
                    }
                  </td>
                </tr>
              </Table>

              <Table responsive striped bordered>
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
                    <td>
                      <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={claimres}
                        isSearchable={false}
                        placeholder={"รอการอนุมัติ"}
                      />
                    </td>
                    <td className="text-right">
                      <NavLink to="/admin/dashboard" activeClassName="">
                        {/* <span className="sidebar-mini-icon">S</span> */}
                        <span>เรียกดูข้อมูล</span>
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
                    <td>
                      <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={claimres}
                        isSearchable={false}
                        placeholder={"รอการอนุมัติ"}
                      />
                    </td>
                    <td className="text-right">
                      <NavLink to="/admin/dashboard" activeClassName="">
                        {/* <span className="sidebar-mini-icon">S</span> */}
                        <span>เรียกดูข้อมูล</span>
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
                    <td>
                      <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={claimres}
                        isSearchable={false}
                        placeholder={"รอการอนุมัติ"}
                      />
                    </td>
                    <td className="text-right">
                      <NavLink to="/admin/dashboard" activeClassName="">
                        {/* <span className="sidebar-mini-icon">S</span> */}
                        <span>เรียกดูข้อมูล</span>
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
                    <td>
                      <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={claimres}
                        isSearchable={false}
                        placeholder={"รอการอนุมัติ"}
                      />
                    </td>
                    <td className="text-right">
                      <NavLink to="/admin/dashboard" activeClassName="">
                        {/* <span className="sidebar-mini-icon">S</span> */}
                        <span>เรียกดูข้อมูล</span>
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
                    <td>
                      <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={claimres}
                        isSearchable={false}
                        placeholder={"รอการอนุมัติ"}
                      />
                    </td>
                    <td className="text-right">
                      <NavLink to="/admin/dashboard" activeClassName="">
                        {/* <span className="sidebar-mini-icon">S</span> */}
                        <span>เรียกดูข้อมูล</span>
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
                    <td>
                      <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={claimres}
                        isSearchable={false}
                        placeholder={"รอการอนุมัติ"}
                      />
                    </td>
                    <td className="text-right">
                      <NavLink to="/admin/dashboard" activeClassName="">
                        {/* <span className="sidebar-mini-icon">S</span> */}
                        <span>เรียกดูข้อมูล</span>
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>เสี่ยโอเลี้ยง สิบบาท</td>
                    <td>0878594943</td>
                    <td>29/4/62</td>
                    <td>น้ำท่วม</td>
                    <td>ชลบุรี</td>
                    <td>
                      <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={claimres}
                        isSearchable={false}
                        placeholder={"รอการอนุมัติ"}
                      />
                    </td>
                    <td className="text-right">
                      <NavLink to="/admin/dashboard" activeClassName="">
                        {/* <span className="sidebar-mini-icon">S</span> */}
                        <span>เรียกดูข้อมูล</span>
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Tab.Pane>
        )
      },
      {
        menuItem: "คำร้องที่ผ่านการอนุมัติ" + "(" + products.length + ")",
        render: () => (
          <Tab.Pane>
            {" "}
            <ToolkitProvider
              keyField="id"
              data={products}
              columns={columns}
              search
            >
              {props => (
                <div>
                  <InputGroupAddon addonType="append">
                    <h4 style={{ paddingRight: 7 }}> ค้นหาจากตาราง </h4>
                    <i
                      style={{ paddingTop: 3, paddingRight: 7 }}
                      className="nc-icon nc-zoom-split"
                    />
                  </InputGroupAddon>
                  <SearchBar style={searchStyle} {...props.searchProps} />

                  <hr />
                  <BootstrapTable
                    // rowStyle={rowStyle}
                    striped
                    pagination={paginationFactory()}
                    cellEdit={cellEditFactory({
                      mode: "click",
                      blurToSave: true
                    })}
                    {...props.baseProps}
                  />

                  <div>แสดงจากข้อมูล {products.length} แถว</div>
                </div>
              )}
              {/* <BootstrapTable
              responsive
              striped
              pagination={paginationFactory()}
              keyField="id"
              data={products}
              columns={columns}
              
            /> */}
            </ToolkitProvider>
          </Tab.Pane>
        )
      },
      {
        menuItem: "คำร้องที่ไม่ผ่านการอนุมัติ(1)",
        render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
      },
      {
        menuItem: "คำร้องที่รอการอนุมัติ(3)",
        render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
      }
    ];

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h2">คำร้อง</CardTitle>
                </CardHeader>
                <CardBody className="table-full-width table-hover">
                  <Tab panes={panes} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
