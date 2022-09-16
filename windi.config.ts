import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  plugins: [ellipsisPlugin(['hover']), configUtilities()],
  theme: {
    truncate: {
      lines: {
        1: '1',
        2: '2'
      }
    },
    extend: {
      // 使用屏幕断点需要注意的是：使用了媒体查询的min-width而不是max-width. 即是何时开始生效而不是何时开始不生效
      screens: {
        sm: '375px',
        md: '414px',
        lg: '640px',
        xl: '768px'
      },
      backgroundSize: {
        'full': '100% 100%'
      },
      fontFamily: {
        Alibaba: ['Alibaba PuHuiTi']
      }
    }
  },
  shortcuts: {
    'position-center': 'absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]',
    'position-x-center': 'absolute left-[50%] transform translate-x-[-50%]',
    'position-y-center': 'absolute top-[50%] transform translate-y-[-50%]',
    'flex-center': 'flex justify-center items-center',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'bg-cover-center': 'bg-center bg-no-repeat bg-cover',
    'bg-contain-center': 'bg-center bg-no-repeat bg-contain',
    'bg-full-center': 'bg-center bg-no-repeat bg-full',
    'single-ellipsis': 'whitespace-nowrap overflow-hidden overflow-ellipsis',
    'click-active': 'transform active:scale-90 duration-[.2s]'
  }
});

/* 
截断多行，需要配置theme.truncate.lines
使用方法：key =》 theme.truncate.lines的值
  truncate-[key]-lines
*/
function ellipsisPlugin(variants: string[] = []) {
  return ({ addUtilities, config, e }) => {
    const lines = config('theme.truncate.lines');
    const keys = Object.keys(lines);

    if (!keys.length) return;

    const utilities = keys.map((key) => ({
      [`.${e(`truncate-${key}-lines`)}`]: {
        'overflow': 'hidden',
        'display': '-webkit-box',
        '-webkit-line-clamp': lines[key],
        '-webkit-box-orient': 'vertical'
      }
    }));

    addUtilities(utilities, variants);
  };
}

function configUtilities() {
  return ({ addUtilities }) => {
    const utilities = {
      '.no-scrollbar': {
        'scrollbar-width': 'none',
        '-ms-overflow-style': 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }
    };
    addUtilities(utilities);
  };
}
