import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div className="k-widget k-tabstrip k-header k-tabstrip-top">
                    <div className="k-tabstrip-items-wrapper k-hstack">
                        <ul className="k-reset k-tabstrip-items">
                            <li className="k-item k-first k-state-active">
                                <span className="k-link">Active</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Normal</span>
                            </li>
                            <li className="k-item k-state-hover">
                                <span className="k-link">Hover</span>
                            </li>
                            <li className="k-item k-last k-state-disabled">
                                <span className="k-link">Disabled</span>
                            </li>
                        </ul>
                    </div>
                    <div className="k-tabstrip-content k-state-active">
                        <div className="k-tabstrip-wrapper">
                            <div className="k-widget k-header k-tabstrip k-tabstrip-left">
                                <div className="k-tabstrip-items-wrapper k-vstack">
                                    <ul className="k-tabstrip-items k-reset">
                                        <li className="k-state-active k-item k-tab-on-top k-first">
                                            <span className="k-link">
                                                Inner Tab 1
                                            </span>
                                        </li>
                                        <li className="k-item k-last">
                                            <span className="k-link">
                                                Inner Tab 2
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="k-tabstrip-content k-state-active" style={{ display: "block", marginLeft: "128px", minHeight: "68px" }}>
                                    Left orientation inside Top orientation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-tabstrip k-header k-tabstrip-bottom">
                    <div className="k-tabstrip-content k-state-active">
                        <div>Bottom orientation</div>
                    </div>
                    <div className="k-tabstrip-items-wrapper k-hstack">
                        <ul className="k-reset k-tabstrip-items">
                            <li className="k-item k-first k-state-active">
                                <span className="k-link">Active</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Normal</span>
                            </li>
                            <li className="k-item k-state-hover">
                                <span className="k-link">Hover</span>
                            </li>
                            <li className="k-item k-last k-state-disabled">
                                <span className="k-link">Disabled</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-tabstrip k-header k-tabstrip-left">
                    <div className="k-tabstrip-items-wrapper k-vstack">
                        <ul className="k-reset k-tabstrip-items">
                            <li className="k-item k-first k-state-active">
                                <span className="k-link">Active</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Normal</span>
                            </li>
                            <li className="k-item k-state-hover">
                                <span className="k-link">Hover</span>
                            </li>
                            <li className="k-item k-state-focused">
                                <span className="k-link">Focused</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Closable</span>
                                <Button fillMode="flat" icon="close" className="k-remove-tab"></Button>
                            </li>
                            <li className="k-item k-last k-state-disabled">
                                <span className="k-link">Disabled</span>
                            </li>
                        </ul>
                    </div>
                    <div className="k-tabstrip-content k-state-active">
                        <div>Left orientation</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-tabstrip k-header k-tabstrip-right">
                    <div className="k-tabstrip-items-wrapper k-vstack">
                        <ul className="k-reset k-tabstrip-items">
                            <li className="k-item k-first k-state-active">
                                <span className="k-link">Active</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Normal</span>
                            </li>
                            <li className="k-item k-state-hover">
                                <span className="k-link">Hover</span>
                            </li>
                            <li className="k-item k-state-focused">
                                <span className="k-link">Focused</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Closable</span>
                                <Button fillMode="flat" icon="close" className="k-remove-tab"></Button>
                            </li>
                            <li className="k-item k-last k-state-disabled">
                                <span className="k-link">Disabled</span>
                            </li>
                        </ul>
                    </div>
                    <div className="k-tabstrip-content k-state-active">
                        <div>Right orientation</div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
