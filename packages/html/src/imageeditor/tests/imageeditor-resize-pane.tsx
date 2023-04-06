import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Toolbar, ToolbarSeparator } from '../../toolbar';
import { Form, FormField } from '../../form';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Resize Pane</h4>
            <div className="k-widget k-imageeditor">

                {/* Header */}
                <div className="k-imageeditor-header">
                    <Toolbar className="k-imageeditor-toolbar">
                        <Button icon="upload"></Button>
                        <Button icon="download"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="undo"></Button>
                        <Button icon="redo"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="crop"></Button>
                        <Button icon="image-resize"></Button>
                        <Button icon="zoom-in"></Button>
                        <Button icon="zoom-out"></Button>
                        <div>
                            <DropdownList value="Zoom options" />
                        </div>
                    </Toolbar>
                </div>

                {/* Content */}
                <div className="k-imageeditor-content" style={{ height: "482px" }}>

                    <div className="k-imageeditor-canvas-container">
                        <div className="k-imageeditor-canvas">
                            <canvas width="61" height="68" style={{ height: "68px" }}></canvas>
                        </div>
                    </div>

                    <div className="k-imageeditor-action-pane">
                        <Form
                            tag="div"
                            className="k-imageeditor-pane-form"
                            layout="grid" cols={2} gapX={2}
                            legend="Resize image"
                            formButtons={
                                <>
                                    <Button>Cancel</Button>
                                    <Button themeColor="primary" >Confirm</Button>
                                </>
                            } >
                            <FormField className="k-col-span-1" label="Width:" editor={ <NumericTextbox showClearButton={false} value="61" /> } />
                            <FormField className="k-col-span-1" label="&nbsp;" editor={ <DropdownList value="Pixels" /> } />
                            <FormField className="k-col-span-1" label="Height:" editor={ <NumericTextbox showClearButton={false} value="68" /> } />
                            <FormField className="k-col-span-1" label="&nbsp;" editor={ <DropdownList value="Pixels" /> } />
                            <FormField className="k-col-span-2" label="Lock aspect ratio:" editor={ <Checkbox /> } />
                        </Form>
                    </div>

                </div>
            </div>

        </div>
    </>
);
