import { classNames, States, Size, Roundness, FillMode } from '../utils-new';
import {
    Input,
    InputPrefix,
    InputSuffix,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon
} from '../input';
import { Button } from '../button';

export const TIMEPICKER_CLASSNAME = `k-timepicker`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.loading
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ],
};

export type KendoTimePickerOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoTimePickerProps = KendoTimePickerOptions & {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    value?: string;
    placeholder?: string;
};

export type KendoTimePickerState = { [K in (typeof states)[number]]?: boolean };

export const TimePicker = (
    props: KendoTimePickerProps &
        KendoTimePickerState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        prefix,
        suffix,
        value,
        placeholder,
        size,
        rounded,
        fillMode,
        hover,
        focus,
        valid,
        invalid,
        required,
        loading,
        disabled,
        ...other
    } = props;


    return (
        <Input
            {...other}
            size={size}
            rounded={rounded}
            fillMode={fillMode}
            hover={hover}
            focus={focus}
            valid={valid}
            invalid={invalid}
            required={required}
            loading={loading}
            disabled={disabled}
            className={classNames(props.className, TIMEPICKER_CLASSNAME)}
        >
            <InputPrefix>{prefix}</InputPrefix>
            <InputInnerInput placeholder={placeholder} value={value} />
            <InputValidationIcon {...props} />
            <InputLoadingIcon {...props} />
            <InputClearValue {...props} />
            <InputSuffix>{suffix}</InputSuffix>
            <Button
                className="k-input-button"
                icon="clock"
                rounded={null}
                size={size}
                fillMode={fillMode}
            />
        </Input>
    );
};

TimePicker.states = states;
TimePicker.options = options;
TimePicker.className = TIMEPICKER_CLASSNAME;

export default TimePicker;
