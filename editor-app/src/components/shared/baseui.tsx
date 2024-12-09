import { Input as BaseInput } from "baseui/input";
import {
  StatefulPopover as BaseStatefulPopover,
  PLACEMENT,
} from "baseui/popover";
import {
  Plus as BasePlus,
  CheckIndeterminate as BaseCheckIndeterminate,
} from "baseui/icon";

export const Input: React.FC<any> = BaseInput as unknown as React.FC<any>;
export const StatefulPopover: React.FC<any> =
  BaseStatefulPopover as unknown as React.FC<any>;
export const Plus: React.FC<any> = BasePlus as unknown as React.FC<any>;
export const CheckIndeterminate: React.FC<any> =
  BaseCheckIndeterminate as unknown as React.FC<any>;
