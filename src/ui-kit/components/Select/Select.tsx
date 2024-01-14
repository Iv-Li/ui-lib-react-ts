import { default as ReactSelect,  Options } from 'react-select'
import { FocusEventHandler } from 'react';
import { ISelectOption , OnChangeSelect} from '@/ui-kit/components/Select/types.tsx';
import { selectStyle } from '@/ui-kit/components/Select/selectStyle.tsx';

interface ISelect {
  options: Options<ISelectOption>
  value: ISelectOption
  onBlur?: FocusEventHandler
  onFocus?: FocusEventHandler
  onChange: OnChangeSelect
}
export const Select = ({ options, onBlur, onFocus, onChange, value }: ISelect) => {
  return (
    <ReactSelect
      options={options}
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      styles={selectStyle}
    />
  )
}