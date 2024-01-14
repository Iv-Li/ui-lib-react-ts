import { SelectStylesConfig } from '@/ui-kit/components/Select/types.tsx';

export const selectStyle: SelectStylesConfig = {
  control: (base) => ({
    ...base,
    cursor: 'pointer',
    border: '1px solid #B0976A'
  }),
  option: (base, { isSelected, isFocused}) => ({
    ...base,
    backgroundColor: isSelected ? '#dfd3c3' : '',
    color: isSelected || isFocused ? 'black' : '',
    cursor: 'pointer',
    ':active' : {
      backgroundColor: '#dfd3c3'
    },
    ':hover': {
      backgroundColor: '#e4e4e4',
      transition: 'all 0 .15'
    }
  })
}