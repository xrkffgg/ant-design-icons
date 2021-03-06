// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TrophyOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrophyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrophyOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrophyOutlinedSvg}></AntdIcon>;
};

TrophyOutlined.displayName = 'TrophyOutlined';
TrophyOutlined.inheritAttrs = false;
export default TrophyOutlined;