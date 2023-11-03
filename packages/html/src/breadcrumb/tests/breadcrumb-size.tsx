import { Icon } from '../../icon';
import { Breadcrumb, BreadcrumbContainer, BreadcrumbItem, BreadcrumbItemText, BreadcrumbLink, BreadcrumbRoot, BreadcrumbRootItemContainer } from '..';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <div>small</div>
            <div>medium</div>
            <div>large</div>

            {Breadcrumb.options.size.map( (size) => (
                <BreadcrumbRoot collapsing="wrap" size={size}>
                    <BreadcrumbRootItemContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icontext focus>
                                <Icon icon="home" />
                                <BreadcrumbItemText text="Home"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbRootItemContainer>
                    <BreadcrumbContainer collapsing="wrap">
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink focus>
                                <BreadcrumbItemText text="Text item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink icon focus>
                                <Icon icon="clock" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbRoot>
            ))}
        </div>
    </>
);
