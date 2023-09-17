'use client';

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface RadioContext {
  value: string;
  onChange: (value: string) => void;
}

const radioContext = createContext<RadioContext>({
  value: '',
  onChange: () => {},
});

export function useRadioContext() {
  return useContext(radioContext);
}

interface RadioGroupProps extends PropsWithChildren {
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function RadioGroup({ children, defaultValue, onChange }: RadioGroupProps) {
  const [innerValue, onInnerValueChange] = useState<string>(defaultValue ?? '');
  const handleRadioChange = useCallback(
    (value: string) => {
      onInnerValueChange(value);
      onChange?.(value);
    },
    [onChange],
  );

  const value = useMemo(
    () => ({ value: innerValue, onChange: handleRadioChange }),
    [innerValue, handleRadioChange],
  );

  return <radioContext.Provider value={value}>{children}</radioContext.Provider>;
}
