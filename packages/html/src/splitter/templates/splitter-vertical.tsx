import { Splitter, SplitterPane } from "..";

export const SplitterVertical = (props) => (
    <Splitter
        children={[
            <SplitterPane flexBasis="20%" collapsible>
                <p>Collapsible pane - 20%</p>
            </SplitterPane>,
            <SplitterPane>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
            </SplitterPane>,
            <SplitterPane flexBasis="30%" collapsible>
                <p>Collapsible pane - 30%</p>
            </SplitterPane>
        ]}
        orientation="vertical"
        {...props}>
    </Splitter>
);
