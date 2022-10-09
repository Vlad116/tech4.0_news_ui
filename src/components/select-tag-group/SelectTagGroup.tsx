import {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import cn from "classnames";

import Icon, { IconCode } from "../icon";

import s from "./SelectTagGroup.module.scss";

type classesType = {
  root?: string;
  tag?: string;
  hidden_input?: string;
};

type SelectTagGroupProps = {
  children: ReactNode;
  onChange: Function;
  onApply: Function;
  isMultiSelect: boolean;
  value?: string;
  cookieValue?: string;
  classes?: classesType;
  // variant,
};

const SelectTagGroup = ({
  children,
  isMultiSelect,
  value,
  cookieValue,
  onChange,
  onApply,
  classes,
}: SelectTagGroupProps) => {
  const [stateValue, setStateValue] = useState<string | Array<string>>(
    isMultiSelect ? [] : ""
  );

  const stateIsArray = typeof stateValue == "object";
  const fieldValue = cookieValue || value;

  useEffect(() => {
    onChange(fieldValue);
  }, [cookieValue, value]);

  const changeStateValue = (selectedValue: string) => {
    if (stateIsArray && stateValue.includes(selectedValue))
      return stateValue.filter((value) => value !== selectedValue);
    return stateIsArray ? [...stateValue, selectedValue] : [];
  };

  const onApplyHandler = (e: React.MouseEvent<HTMLElement>) =>
    onApply(stateValue);

  // ReactNode
  const renderTag = (child: any) => {
    const checked =
      (fieldValue || stateValue) === child.props.value ||
      stateValue.includes(child.props.value);

    const handleChange = () => {
      isMultiSelect
        ? setStateValue(changeStateValue(child.props.value))
        : setStateValue(child.props.value);
      if (onChange) {
        onChange(child.props.value);
      }
    };

    const clone = cloneElement(child, {
      ...child.props,
      onClick: handleChange,
      checked,
    });
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className={cn(s.root__tag, classes?.tag)}>
        {clone}
        <input
          type="radio"
          autoComplete="off"
          onChange={handleChange}
          checked={checked}
          className={cn(s.root__hidden_input, classes?.hidden_input)}
        />
      </label>
    );
  };

  return (
    <div className={s.root}>
      <div className={cn(s.root__tags, classes?.root)}>
        {Children.map(children, (child) => {
          if (isValidElement(child)) return renderTag(child);
          return null;
        })}
      </div>
      {isMultiSelect && (
        <button className={cn(s.root__apply)} onClick={onApplyHandler}>
          Готово <Icon icon={IconCode.chevron} />
        </button>
      )}
    </div>
  );
};

SelectTagGroup.defaultProps = {
  onApply: () => {},
  classes: {},
  value: "",
  isMultiSelect: false,
};

export default SelectTagGroup;
