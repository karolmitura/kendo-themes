
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        max-width: 1400px;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <div className="k-widget k-scheduler k-scheduler-flex" style={{ height: "900px" }} >
                <div className="k-scheduler-toolbar k-toolbar">
                    <span className="k-button-group k-scheduler-navigation">
                        <Button>Today</Button>
                        <Button icon="arrow-60-left"></Button>
                        <Button icon="arrow-60-right"></Button>
                    </span>
                    <a href="#" className="k-nav-current">
                        <Icon name="calendar"></Icon>
                        <span className="k-sm-date-format">6/21/2020 - 6/28/2020</span>
                        <span className="k-lg-date-format">Sunday, June 21, 2020 - Saturday, June 27, 2020</span>
                    </a>
                    <span className="k-spacer"></span>
                    <span className="k-scheduler-views-wrapper">
                        <select className="k-views-dropdown k-picker k-dropdown-list k-dropdown k-rounded-md">
                            <option>Agenda</option>
                        </select>
                        <span className="k-button-group k-scheduler-views">
                            <Button>Day</Button>
                            <Button>Week</Button>
                            <Button>Month</Button>
                            <Button>Timeline</Button>
                            <Button selected>Agenda</Button>
                        </span>
                    </span>
                </div>
                <div className="k-scheduler-layout k-scheduler-layout-flex k-scheduler-agendaview">
                    <div className="k-scheduler-head">
                        <div className="k-scheduler-group">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-group-cell k-heading-cell" style={{ minWidth: "111px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell k-heading-cell" style={{ minWidth: "33px" }} ></div>
                                <div className="k-scheduler-cell k-group-content">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell k-group-cell k-scheduler-datecolumn" style={{ minWidth: "168px" }} >Date</div>
                                        <div className="k-scheduler-cell k-heading-cell k-group-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >Time</div>
                                        <div className="k-scheduler-cell k-heading-cell k-scheduler-eventcolumn">Event</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="k-scheduler-body">
                        <div className="k-scheduler-group">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-group-cell k-heading-cell" style={{ minWidth: "111px" }} >Meeting Room 101</div>
                                <div className="k-scheduler-cell k-group-content k-resource-row">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-group-cell k-heading-cell" style={{ minWidth: "33px" }} >Peter</div>
                                        <div className="k-scheduler-cell k-group-content k-resource-row">
                                            <div className="k-scheduler-row  k-scheduler-content">
                                                <div className="k-scheduler-datecolumn k-group-cell k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minWidth: "168px" }} >
                                                    <div><strong className="k-scheduler-agendaday">21</strong><em className="k-scheduler-agendaweek">Sunday</em><span className="k-scheduler-agendadate">Jun 2020</span></div>
                                                </div>
                                                <div className="k-scheduler-cell k-group-content">
                                                    <div className="k-scheduler-cell k-heading-cell k-group-cell">no events</div>
                                                </div>
                                            </div>
                                            <div className="k-scheduler-row  k-scheduler-content">
                                                <div className="k-scheduler-datecolumn k-group-cell k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minWidth: "168px" }} >
                                                    <div><strong className="k-scheduler-agendaday">22</strong><em className="k-scheduler-agendaweek">Monday</em><span className="k-scheduler-agendadate">Jun 2020</span></div>
                                                </div>
                                                <div className="k-scheduler-cell k-group-content">
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>9:30 PM-11:00 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'red', backgroundColor: 'red' }} ></span><Icon name="reload"></Icon>Dance Practice<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="k-scheduler-row  k-scheduler-content">
                                                <div className="k-scheduler-datecolumn k-group-cell k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minWidth: "168px" }} >
                                                    <div><strong className="k-scheduler-agendaday">23</strong><em className="k-scheduler-agendaweek">Tuesday</em><span className="k-scheduler-agendadate">Jun 2020</span></div>
                                                </div>
                                                <div className="k-scheduler-cell k-group-content">
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>10:00 PM-12:00 AM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'red', backgroundColor: 'red' }} ></span><Icon name="reload"></Icon>HR Lecture<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-group-cell k-heading-cell" style={{ minWidth: "33px" }} >Alex</div>
                                        <div className="k-scheduler-cell k-group-content k-resource-row">
                                            <div className="k-scheduler-row  k-scheduler-content">
                                                <div className="k-scheduler-datecolumn k-group-cell k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minWidth: "168px" }} >
                                                    <div><strong className="k-scheduler-agendaday">24</strong><em className="k-scheduler-agendaweek">Wednesday</em><span className="k-scheduler-agendadate">Jun 2020</span></div>
                                                </div>
                                                <div className="k-scheduler-cell k-group-content">
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>11:30 AM-1:00 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'red', backgroundColor: 'red' }} ></span>Car Service<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>12:45 PM-2:30 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'red', backgroundColor: 'red' }} ></span>Breakfast with Tom<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>all day</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'red', backgroundColor: 'red' }} ></span>Team planning meeting<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>4:30 PM-6:00 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'red', backgroundColor: 'red' }} ></span>Install new laptops in conference rooms<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>4:30 PM-5:30 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'red', backgroundColor: 'red' }} ></span>Job Interview - Bernard Atkins<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>6:00 PM-8:30 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'red', backgroundColor: 'red' }} ></span>Review Job Applications<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>6:00 PM-7:00 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'red', backgroundColor: 'red' }} ></span><Icon name="reload"></Icon>Helpdesk weekly meeting<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>all day</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'red', backgroundColor: 'red' }} ></span>Support Phone Call<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>9:30 PM-11:00 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'red', backgroundColor: 'red' }} ></span><Icon name="reload"></Icon>Dance Practice<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-group-cell k-heading-cell" style={{ minWidth: "111px" }} >Meeting Room 201</div>
                                <div className="k-scheduler-cell k-group-content k-resource-row">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-group-cell k-heading-cell" style={{ minWidth: "33px" }} >Peter</div>
                                        <div className="k-scheduler-cell k-group-content k-resource-row">
                                            <div className="k-scheduler-row  k-scheduler-content">
                                                <div className="k-scheduler-datecolumn k-group-cell k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minWidth: "168px" }} >
                                                    <div><strong className="k-scheduler-agendaday">21</strong><em className="k-scheduler-agendaweek">Sunday</em><span className="k-scheduler-agendadate">Jun 2020</span></div>
                                                </div>
                                                <div className="k-scheduler-cell k-group-content">
                                                    <div className="k-scheduler-cell k-heading-cell k-group-cell">no events</div>
                                                </div>
                                            </div>
                                            <div className="k-scheduler-row  k-scheduler-content">
                                                <div className="k-scheduler-datecolumn k-group-cell k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minWidth: "168px" }} >
                                                    <div><strong className="k-scheduler-agendaday">22</strong><em className="k-scheduler-agendaweek">Monday</em><span className="k-scheduler-agendadate">Jun 2020</span></div>
                                                </div>
                                                <div className="k-scheduler-cell k-group-content">
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>9:30 PM-11:00 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'green', backgroundColor: 'green' }} ></span><Icon name="reload"></Icon>Dance Practice<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="k-scheduler-row  k-scheduler-content">
                                                <div className="k-scheduler-datecolumn k-group-cell k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minWidth: "168px" }} >
                                                    <div><strong className="k-scheduler-agendaday">23</strong><em className="k-scheduler-agendaweek">Tuesday</em><span className="k-scheduler-agendadate">Jun 2020</span></div>
                                                </div>
                                                <div className="k-scheduler-cell k-group-content">
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>10:00 PM-12:00 AM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'green', backgroundColor: 'green' }} ></span><Icon name="reload"></Icon>HR Lecture<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="k-scheduler-row  k-scheduler-content">
                                                <div className="k-scheduler-datecolumn k-group-cell k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minWidth: "168px" }} >
                                                    <div><strong className="k-scheduler-agendaday">24</strong><em className="k-scheduler-agendaweek">Wednesday</em><span className="k-scheduler-agendadate">Jun 2020</span></div>
                                                </div>
                                                <div className="k-scheduler-cell k-group-content">
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>11:30 AM-1:00 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'green', backgroundColor: 'green' }} ></span>Car Service<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>12:45 PM-2:30 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'green', backgroundColor: 'green' }} ></span>Breakfast with Tom<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>all day</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'green', backgroundColor: 'green' }} ></span>Team planning meeting<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>all day</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'green', backgroundColor: 'green' }} ></span>Replace the printer on the 1st floor<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>all day</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'green', backgroundColor: 'green' }} ></span>Register new Access Cards<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>4:30 PM-6:00 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'green', backgroundColor: 'green' }} ></span>Install new laptops in conference rooms<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>4:30 PM-5:30 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'green', backgroundColor: 'green' }} ></span>Job Interview - Bernard Atkins<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>6:00 PM-8:30 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'green', backgroundColor: 'green' }} ></span>Review Job Applications<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>6:00 PM-7:00 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'green', backgroundColor: 'green' }} ></span><Icon name="reload"></Icon>Helpdesk weekly meeting<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>all day</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'green', backgroundColor: 'green' }} ></span>Support Phone Call<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="k-scheduler-row">
                                                        <div className="k-scheduler-cell k-scheduler-timecolumn" style={{ minWidth: "640px" }} >
                                                            <div>9:30 PM-11:00 PM</div>
                                                        </div>
                                                        <div className="k-scheduler-cell">
                                                            <div className="k-task"><span className="k-scheduler-mark" style={{ color: 'green', backgroundColor: 'green' }} ></span><Icon name="reload"></Icon>Dance Practice<a className="k-link k-event-delete"><Icon name="x"></Icon></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
