import cn from "classnames";

import s from "./SelectTag.module.scss";

type SelectTagProps = {
  label: string;
  value: string;
  onClick?: Function;
  checked?: boolean;
};

const SelectTag = ({
  label,
  value,
  onClick,
  checked,
  ...restProps
}: SelectTagProps) => {
  const handleClick = (e: React.SyntheticEvent) => {
    if (onClick) {
      onClick(e, { checked: !checked });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(s.root, {
        [s.checked]: checked,
      })}
      {...restProps}
    >
      {label}
    </button>
  );
};

export default SelectTag;

SelectTag.defaultProps = {
  checked: false,
  onClick: () => {},
};
