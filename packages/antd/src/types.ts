export interface IAntdTheme {
  alert?: {
    close?: { color?: string; hover?: { color?: string } };
    error?: {
      bg?: { color?: string };
      border?: { color?: string };
      icon?: { color?: string };
    };
    info?: {
      bg?: { color?: string };
      border?: { color?: string };
      icon?: { color?: string };
    };
    message?: { color?: string };
    success?: {
      bg?: { color?: string };
      border?: { color?: string };
      icon?: { color?: string };
    };
    text?: { color?: string };
    warning?: {
      bg?: { color?: string };
      border?: { color?: string };
      icon?: { color?: string };
    };
  };
  anchor?: { bg?: string; border?: { color?: string } };
  animation?: { duration?: { base?: string; fast?: string; slow?: string } };
  ant?: { prefix?: string };
  avatar?: {
    bg?: string;
    border?: { radius?: string };
    color?: string;
    font?: { size?: { base?: string; lg?: string; sm?: string } };
    size?: { base?: string; lg?: string; sm?: string };
  };
  back?: { top?: { bg?: string; color?: string; hover?: { bg?: string } } };
  background?: { color?: { base?: string; light?: string } };
  badge?: {
    dot?: { size?: string };
    font?: { size?: string; weight?: string };
    height?: string;
    status?: { size?: string };
    text?: { color?: string };
  };
  black?: string;
  blue?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    base?: string;
  };
  body?: { background?: string };
  border?: {
    color?: { base?: string; inverse?: string; split?: string };
    radius?: { base?: string };
    style?: { base?: string };
    width?: { base?: string };
  };
  box?: { shadow?: { base?: string } };
  breadcrumb?: {
    base?: { color?: string };
    font?: { size?: string };
    icon?: { font?: { size?: string } };
    last?: { item?: { color?: string } };
    link?: { color?: string; colorHover?: string };
    separator?: { color?: string; margin?: string };
  };
  btn?: {
    border?: {
      radius?: { base?: string; sm?: string };
      style?: string;
      width?: string;
    };
    circle?: { size?: string; sizeLg?: string; sizeSm?: string };
    danger?: { bg?: string; border?: string; color?: string };
    default?: {
      bg?: string;
      border?: string;
      color?: string;
      ghost?: { bg?: string; border?: string; color?: string };
    };
    disable?: { bg?: string; border?: string; color?: string };
    font?: { size?: { lg?: string; sm?: string }; weight?: number | string };
    group?: { border?: string };
    height?: { base?: string; lg?: string; sm?: string };
    link?: { ghost?: { color?: string } };
    padding?: { base?: string; lg?: string; sm?: string };
    primary?: { bg?: string; color?: string; shadow?: string };
    shadow?: string;
    square?: { size?: string; sizeLg?: string; sizeSm?: string };
    text?: { shadow?: string };
  };
  calendar?: {
    bg?: string;
    border?: { color?: string };
    full?: { bg?: string; panel?: { bg?: string } };
    input?: { bg?: string };
    item?: { active?: { bg?: string } };
  };
  card?: {
    actions?: { background?: string };
    background?: string;
    head?: { background?: string; color?: string; padding?: string };
    inner?: { head?: { padding?: string } };
    padding?: { base?: string };
    radius?: string;
    shadow?: string;
    skeleton?: { bg?: string };
  };
  carousel?: {
    dot?: { active?: { width?: string }; height?: string; width?: string };
  };
  cascader?: {
    bg?: string;
    dropdown?: {
      edge?: { child?: { vertical?: { padding?: string } } };
      font?: { size?: string };
      line?: { height?: string };
      vertical?: { padding?: string };
    };
    item?: { selected?: { bg?: string } };
    menu?: { bg?: string; border?: { color?: { split?: string } } };
  };
  checkbox?: {
    border?: { width?: string };
    check?: { bg?: string; color?: string };
    color?: string;
    size?: string;
  };
  code?: { family?: string };
  collapse?: {
    content?: { bg?: string; padding?: string };
    header?: { bg?: string; padding?: string; paddingExtra?: string };
    panel?: { border?: { radius?: string } };
  };
  comment?: {
    action?: { color?: string; hover?: { color?: string } };
    author?: { name?: { color?: string }; time?: { color?: string } };
    bg?: string;
    font?: { size?: { base?: string; sm?: string } };
    nest?: { indent?: string };
    padding?: { base?: string };
  };
  component?: { background?: string };
  control?: { padding?: { horizontal?: string; horizontalSm?: string } };
  cyan?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    base?: string;
  };
  descriptions?: { bg?: string };
  disabled?: { bg?: string; color?: string; colorDark?: string };
  drawer?: {
    bg?: string;
    body?: { padding?: string };
    header?: { padding?: string };
  };
  dropdown?: {
    edge?: { child?: { vertical?: { padding?: string } } };
    font?: { size?: string };
    line?: { height?: string };
    menu?: { bg?: string; submenu?: { disabled?: { bg?: string } } };
    selected?: { color?: string };
    vertical?: { padding?: string };
  };
  ease?: {
    base?: { in?: string; out?: string };
    in?: string;
    inBack?: string;
    inCirc?: string;
    inOut?: string;
    inOutBack?: string;
    inOutCirc?: string;
    inOutQuint?: string;
    inQuint?: string;
    out?: string;
    outBack?: string;
    outCirc?: string;
    outQuint?: string;
  };
  empty?: { font?: { size?: string } };
  error?: { color?: string };
  font?: {
    family?: string;
    feature?: { settings?: { base?: string } };
    size?: { base?: string; lg?: string; sm?: string };
    variant?: { base?: string };
  };
  form?: {
    error?: { input?: { bg?: string } };
    item?: {
      label?: { colon?: { margin?: { left?: string; right?: string } } };
      margin?: { bottom?: string };
      trailing?: { colon?: string };
    };
    vertical?: { label?: { margin?: number | string; padding?: string } };
    warning?: { input?: { bg?: string } };
  };
  geekblue?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    base?: string;
  };
  gold?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    base?: string;
  };
  green?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    base?: string;
  };
  grid?: { columns?: number | string; gutter?: { width?: number | string } };
  heading?: {
    '1'?: { size?: string };
    '2'?: { size?: string };
    '3'?: { size?: string };
    '4'?: { size?: string };
    color?: string;
    colorDark?: string;
  };
  highlight?: { color?: string };
  html?: { selector?: string };
  icon?: { color?: string; colorHover?: string };
  iconfont?: { css?: { prefix?: string } };
  info?: { color?: string };
  input?: {
    addon?: { bg?: string };
    bg?: string;
    border?: { color?: string };
    color?: string;
    disabled?: { bg?: string };
    height?: { base?: string; lg?: string; sm?: string };
    hover?: { border?: { color?: string } };
    icon?: { color?: string; hover?: { color?: string } };
    number?: {
      handler?: {
        active?: { bg?: string };
        bg?: string;
        border?: { color?: string };
        hover?: { bg?: string };
      };
      hover?: { border?: { color?: string } };
    };
    outline?: { offset?: string };
    padding?: {
      horizontal?: string;
      horizontalBase?: string;
      horizontalLg?: string;
      horizontalSm?: string;
      vertical?: { base?: string; lg?: string; sm?: string };
    };
    placeholder?: { color?: string };
  };
  item?: { active?: { bg?: string }; hover?: { bg?: string } };
  label?: { color?: string; required?: { color?: string } };
  layout?: {
    body?: { background?: string };
    footer?: { background?: string; padding?: string };
    header?: { background?: string; height?: string; padding?: string };
    sider?: { background?: string; backgroundLight?: string };
    trigger?: {
      background?: string;
      backgroundLight?: string;
      color?: string;
      colorLight?: string;
      height?: string;
    };
    zero?: { trigger?: { height?: string; width?: string } };
  };
  lime?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    base?: string;
  };
  line?: { height?: { base?: string } };
  link?: {
    active?: { color?: string };
    color?: string;
    decoration?: string;
    hover?: { color?: string; decoration?: string };
  };
  list?: {
    empty?: { text?: { padding?: string } };
    footer?: { background?: string };
    header?: { background?: string };
    item?: {
      meta?: {
        avatar?: { margin?: { right?: string } };
        margin?: { bottom?: string };
        title?: { margin?: { bottom?: string } };
      };
      padding?: string;
    };
  };
  magenta?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    base?: string;
  };
  mentions?: {
    dropdown?: { bg?: string; menu?: { item?: { hover?: { bg?: string } } } };
  };
  menu?: {
    bg?: string;
    collapsed?: { width?: string };
    dark?: {
      arrow?: { color?: string };
      bg?: string;
      color?: string;
      highlight?: { color?: string };
      item?: { active?: { bg?: string }; hover?: { bg?: string } };
      selected?: {
        item?: { icon?: { color?: string }; text?: { color?: string } };
      };
      submenu?: { bg?: string };
    };
    highlight?: { color?: string };
    icon?: { size?: string; sizeLg?: string };
    inline?: { toplevel?: { item?: { height?: string } } };
    item?: {
      active?: { bg?: string; border?: { width?: string } };
      boundary?: { margin?: string };
      color?: string;
      font?: { size?: string };
      group?: { title?: { color?: string } };
      height?: string;
      vertical?: { margin?: string };
    };
    popup?: { bg?: string };
  };
  message?: { notice?: { content?: { bg?: string; padding?: string } } };
  modal?: {
    body?: { padding?: string };
    content?: { bg?: string };
    footer?: { bg?: string; border?: { color?: { split?: string } } };
    header?: { bg?: string; border?: { color?: { split?: string } } };
    heading?: { color?: string };
    mask?: { bg?: string };
  };
  normal?: { color?: string };
  notification?: { bg?: string };
  orange?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    base?: string;
  };
  outline?: {
    blur?: { size?: number | string };
    color?: string;
    width?: string;
  };
  padding?: { lg?: string; md?: string; sm?: string; xs?: string };
  page?: {
    header?: {
      back?: { color?: string };
      ghost?: { bg?: string };
      padding?: string;
      paddingBreadcrumb?: string;
      paddingVertical?: string;
    };
  };
  pagination?: {
    font?: { family?: string; weight?: { active?: number | string } };
    item?: {
      bg?: string;
      bgActive?: string;
      disabled?: { bg?: { active?: string }; color?: { active?: string } };
      link?: { bg?: string };
      size?: string;
      sizeSm?: string;
    };
  };
  picker?: {
    basic?: {
      cell?: {
        disabled?: { bg?: string };
        hover?: { color?: string; with?: { range?: { color?: string } } };
      };
    };
    bg?: string;
    border?: { color?: string };
    date?: { hover?: { range?: { border?: { color?: string } } } };
  };
  pink?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    base?: string;
  };
  popover?: {
    arrow?: { color?: string; outer?: { color?: string }; width?: string };
    background?: string;
    bg?: string;
    color?: string;
    distance?: string;
    min?: { width?: string };
  };
  preset?: { colors?: string };
  primary?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    color?: string;
  };
  process?: { tail?: { color?: string } };
  processing?: { color?: string };
  progress?: {
    default?: { color?: string };
    radius?: string;
    remaining?: { color?: string };
    steps?: { item?: { bg?: string } };
    text?: { color?: string };
  };
  purple?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    base?: string;
  };
  radio?: {
    button?: {
      active?: { color?: string };
      bg?: string;
      checked?: { bg?: string };
      color?: string;
      hover?: { color?: string };
    };
    disabled?: { button?: { checked?: { bg?: string; color?: string } } };
    dot?: { color?: string; disabled?: { color?: string } };
    size?: string;
  };
  radtio?: { solid?: { checked?: { color?: string } } };
  rate?: { star?: { bg?: string; color?: string } };
  red?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    base?: string;
  };
  screen?: {
    lg?: string;
    lgMax?: string;
    lgMin?: string;
    md?: string;
    mdMax?: string;
    mdMin?: string;
    sm?: string;
    smMax?: string;
    smMin?: string;
    xl?: string;
    xlMax?: string;
    xlMin?: string;
    xs?: string;
    xsMax?: string;
    xsMin?: string;
    xxl?: string;
    xxlMin?: string;
  };
  select?: {
    background?: string;
    border?: { color?: string };
    clear?: { background?: string };
    dropdown?: {
      bg?: string;
      font?: { size?: string };
      line?: { height?: string };
      vertical?: { padding?: string };
    };
    item?: {
      active?: { bg?: string };
      selected?: { bg?: string; font?: { weight?: number | string } };
    };
    selection?: { item?: { bg?: string; border?: { color?: string } } };
  };
  shadow?: {
    '1'?: { down?: string; left?: string; right?: string; up?: string };
    '2'?: string;
    color?: string;
    colorInverse?: string;
  };
  skeleton?: { color?: string; to?: { color?: string } };
  slider?: {
    disabled?: { background?: { color?: string }; color?: string };
    dot?: { border?: { color?: string; colorActive?: string } };
    handle?: {
      background?: { color?: string };
      border?: { width?: string };
      color?: string;
      colorFocus?: string;
      colorFocusShadow?: string;
      colorHover?: string;
      colorTooltip?: { open?: string };
      shadow?: number | string;
    };
    margin?: string;
    rail?: { background?: { color?: string; colorHover?: string } };
    track?: { background?: { color?: string; colorHover?: string } };
  };
  spin?: { dot?: { size?: string; sizeLg?: string; sizeSm?: string } };
  statistic?: {
    content?: { font?: { size?: string } };
    font?: { family?: string };
    title?: { font?: { size?: string } };
    unit?: { font?: { size?: string } };
  };
  steps?: { nav?: { arrow?: { color?: string } } };
  success?: { color?: string };
  switch?: {
    bg?: string;
    color?: string;
    disabled?: { opacity?: string };
    height?: string;
    shadow?: { color?: string };
    sm?: { checked?: { margin?: { left?: string } }; height?: string };
  };
  table?: {
    bg?: string;
    body?: { selected?: { sort?: { bg?: string } }; sort?: { bg?: string } };
    border?: { radius?: { base?: string } };
    expanded?: { row?: { bg?: string } };
    filter?: { btns?: { bg?: string }; dropdown?: { bg?: string } };
    footer?: { bg?: string; color?: string };
    header?: {
      bg?: string;
      bgSm?: string;
      color?: string;
      filter?: { active?: { bg?: string } };
      sort?: { active?: { bg?: string }; bg?: string };
    };
    padding?: { horizontal?: string; vertical?: string };
    row?: { hover?: { bg?: string } };
    selected?: {
      row?: { bg?: string; color?: string; hover?: { bg?: string } };
    };
  };
  tabs?: {
    active?: { color?: string };
    bar?: { margin?: string };
    card?: {
      active?: { color?: string };
      gutter?: string;
      head?: { background?: string };
      height?: string;
      tab?: { active?: { border?: { top?: string } } };
    };
    highlight?: { color?: string };
    horizontal?: {
      margin?: string;
      marginRtl?: string;
      padding?: string;
      paddingLg?: string;
      paddingSm?: string;
    };
    hover?: { color?: string };
    ink?: { bar?: { color?: string } };
    scrolling?: { size?: string };
    title?: { font?: { size?: string; sizeLg?: string; sizeSm?: string } };
    vertical?: { margin?: string; padding?: string };
  };
  tag?: { default?: { bg?: string; color?: string }; font?: { size?: string } };
  text?: {
    color?: string;
    colorDark?: string;
    colorInverse?: string;
    colorSecondary?: string;
    colorSecondaryDark?: string;
    selection?: { bg?: string };
  };
  theme?: string;
  timeline?: {
    color?: string;
    dot?: { bg?: string; border?: { width?: string }; color?: string };
    width?: string;
  };
  tooltip?: {
    arrow?: { color?: string; width?: string };
    bg?: string;
    color?: string;
    distance?: string;
    max?: { width?: string };
  };
  transfer?: {
    disabled?: { bg?: string };
    header?: { height?: string };
    item?: { hover?: { bg?: string } };
    list?: { height?: string };
  };
  tree?: {
    bg?: string;
    child?: { padding?: string };
    directory?: { selected?: { bg?: string; color?: string } };
    node?: { hover?: { bg?: string }; selected?: { bg?: string } };
    title?: { height?: string };
  };
  typography?: {
    title?: {
      font?: { weight?: number | string };
      margin?: { bottom?: string; top?: string };
    };
  };
  upload?: { actions?: { color?: string } };
  volcano?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    base?: string;
  };
  warning?: { color?: string };
  wave?: { animation?: { width?: string } };
  white?: string;
  yellow?: {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '5'?: string;
    '6'?: string;
    '7'?: string;
    '8'?: string;
    '9'?: string;
    '10'?: string;
    base?: string;
  };
  zindex?: {
    affix?: number | string;
    back?: { top?: number | string };
    badge?: number | string;
    dropdown?: number | string;
    message?: number | string;
    modal?: number | string;
    modalMask?: number | string;
    notification?: number | string;
    picker?: number | string;
    pickerPanel?: number | string;
    popover?: number | string;
    popup?: { close?: number | string };
    table?: { fixed?: string };
    tooltip?: number | string;
  };
}
