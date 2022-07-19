module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'layer',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin'
        ]
      }
    ],
    'no-empty-source': null,
    'named-grid-areas-no-invalid': null,
    'unicode-bom': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': [
      /* 定位布局 */
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'float',
      'clear',
      'columns',
      'columns-width',
      'columns-count',
      'column-rule',
      'column-rule-width',
      'column-rule-style',
      'column-rule-color',
      'column-fill',
      'column-span',
      'column-gap',
      'display',
      'grid',
      'grid-template-rows',
      'grid-template-columns',
      'grid-template-areas',
      'grid-auto-rows',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid-column-gap',
      'grid-row-gap',
      'grid-template',
      'grid-template-rows',
      'grid-template-columns',
      'grid-template-areas',
      'grid-gap',
      'grid-row-gap',
      'grid-column-gap',
      'grid-area',
      'grid-row-start',
      'grid-row-end',
      'grid-column-start',
      'grid-column-end',
      'grid-column',
      'grid-column-start',
      'grid-column-end',
      'grid-row',
      'grid-row-start',
      'grid-row-end',
      'flex',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'flex-flow',
      'flex-direction',
      'flex-wrap',
      'justify-content',
      'align-content',
      'align-items',
      'align-self',
      'order',
      'visibility',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'zoom',
      'table-layout',
      'empty-cells',
      'caption-side',
      'border-spacing',
      'border-collapse',
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      '-webkit-box-orient',
      '-webkit-box-direction',
      '-webkit-box-decoration-break',
      '-webkit-box-pack',
      '-webkit-box-align',
      '-webkit-box-flex',
      /* 盒模型 */
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      '-webkit-box-sizing',
      '-moz-box-sizing',
      'box-sizing',
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      '-webkit-border-radius',
      '-moz-border-radius',
      'border-radius',
      '-webkit-border-top-left-radius',
      '-moz-border-radius-topleft',
      'border-top-left-radius',
      '-webkit-border-top-right-radius',
      '-moz-border-radius-topright',
      'border-top-right-radius',
      '-webkit-border-bottom-right-radius',
      '-moz-border-radius-bottomright',
      'border-bottom-right-radius',
      '-webkit-border-bottom-left-radius',
      '-moz-border-radius-bottomleft',
      'border-bottom-left-radius',
      '-webkit-border-image',
      '-moz-border-image',
      '-o-border-image',
      'border-image',
      '-webkit-border-image-source',
      '-moz-border-image-source',
      '-o-border-image-source',
      'border-image-source',
      '-webkit-border-image-slice',
      '-moz-border-image-slice',
      '-o-border-image-slice',
      'border-image-slice',
      '-webkit-border-image-width',
      '-moz-border-image-width',
      '-o-border-image-width',
      'border-image-width',
      '-webkit-border-image-outset',
      '-moz-border-image-outset',
      '-o-border-image-outset',
      'border-image-outset',
      '-webkit-border-image-repeat',
      '-moz-border-image-repeat',
      '-o-border-image-repeat',
      'border-image-repeat',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      /* 文字排版 */
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'font-variant',
      'font-size-adjust',
      'font-stretch',
      'font-effect',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'font-smooth',
      'line-height',
      'text-align',
      '-webkit-text-align-last',
      '-moz-text-align-last',
      '-ms-text-align-last',
      'text-align-last',
      'vertical-align',
      'white-space',
      'text-decoration',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-style',
      'text-emphasis-position',
      'text-indent',
      '-ms-text-justify',
      'text-justify',
      'letter-spacing',
      'word-spacing',
      '-ms-writing-mode',
      'text-outline',
      'text-transform',
      'text-wrap',
      '-ms-text-overflow',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      '-ms-word-wrap',
      'word-wrap',
      '-ms-word-break',
      'word-break',
      /* 视觉效果 */
      'color',
      'background',
      'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader',
      'background-color',
      'background-image',
      'background-repeat',
      'background-attachment',
      'background-position',
      '-ms-background-position-x',
      'background-position-x',
      '-ms-background-position-y',
      'background-position-y',
      '-webkit-background-clip',
      '-moz-background-clip',
      'background-clip',
      'background-origin',
      '-webkit-background-size',
      '-moz-background-size',
      '-o-background-size',
      'background-size',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      'opacity',
      'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity',
      "-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
      '-ms-interpolation-mode',
      '-webkit-box-shadow',
      '-moz-box-shadow',
      'box-shadow',
      'filter:progid:DXImageTransform.Microsoft.gradient',
      "-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
      'text-shadow',
      /* 过渡动画 */
      '-webkit-transition',
      '-moz-transition',
      '-ms-transition',
      '-o-transition',
      'transition',
      '-webkit-transition-delay',
      '-moz-transition-delay',
      '-ms-transition-delay',
      '-o-transition-delay',
      'transition-delay',
      '-webkit-transition-timing-function',
      '-moz-transition-timing-function',
      '-ms-transition-timing-function',
      '-o-transition-timing-function',
      'transition-timing-function',
      '-webkit-transition-duration',
      '-moz-transition-duration',
      '-ms-transition-duration',
      '-o-transition-duration',
      'transition-duration',
      '-webkit-transition-property',
      '-moz-transition-property',
      '-ms-transition-property',
      '-o-transition-property',
      'transition-property',
      '-webkit-transform',
      '-moz-transform',
      '-ms-transform',
      '-o-transform',
      'transform',
      '-webkit-transform-origin',
      '-moz-transform-origin',
      '-ms-transform-origin',
      '-o-transform-origin',
      'transform-origin',
      '-webkit-animation',
      '-moz-animation',
      '-ms-animation',
      '-o-animation',
      'animation',
      '-webkit-animation-name',
      '-moz-animation-name',
      '-ms-animation-name',
      '-o-animation-name',
      'animation-name',
      '-webkit-animation-duration',
      '-moz-animation-duration',
      '-ms-animation-duration',
      '-o-animation-duration',
      'animation-duration',
      '-webkit-animation-play-state',
      '-moz-animation-play-state',
      '-ms-animation-play-state',
      '-o-animation-play-state',
      'animation-play-state',
      '-webkit-animation-timing-function',
      '-moz-animation-timing-function',
      '-ms-animation-timing-function',
      '-o-animation-timing-function',
      'animation-timing-function',
      '-webkit-animation-delay',
      '-moz-animation-delay',
      '-ms-animation-delay',
      '-o-animation-delay',
      'animation-delay',
      '-webkit-animation-iteration-count',
      '-moz-animation-iteration-count',
      '-ms-animation-iteration-count',
      '-o-animation-iteration-count',
      'animation-iteration-count',
      '-webkit-animation-direction',
      '-moz-animation-direction',
      '-ms-animation-direction',
      '-o-animation-direction',
      'animation-direction',
      /* 杂项 */
      'content',
      'quotes',
      'counter-reset',
      'counter-increment',
      'resize',
      'cursor',
      '-webkit-user-select',
      '-moz-user-select',
      '-ms-user-select',
      'user-select',
      'nav-index',
      'nav-up',
      'nav-right',
      'nav-down',
      'nav-left',
      '-moz-tab-size',
      '-o-tab-size',
      'tab-size',
      '-webkit-hyphens',
      '-moz-hyphens',
      'hyphens',
      'pointer-events'
    ]
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
};
