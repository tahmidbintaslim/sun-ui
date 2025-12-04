/**
 * Sun UI Animation System
 *
 * Transitions, keyframes, and animation presets
 */
export declare const duration: {
  readonly instant: '0ms';
  readonly fastest: '50ms';
  readonly faster: '100ms';
  readonly fast: '150ms';
  readonly normal: '200ms';
  readonly slow: '300ms';
  readonly slower: '400ms';
  readonly slowest: '500ms';
};
export declare const easing: {
  readonly linear: 'linear';
  readonly easeIn: 'cubic-bezier(0.4, 0, 1, 1)';
  readonly easeOut: 'cubic-bezier(0, 0, 0.2, 1)';
  readonly easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)';
  readonly easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)';
  readonly easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  readonly easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
  readonly easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
  readonly easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)';
  readonly easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)';
  readonly easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)';
  readonly easeInBack: 'cubic-bezier(0.36, 0, 0.66, -0.56)';
  readonly easeInOutBack: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)';
  readonly spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
};
export declare const transitionProperty: {
  readonly none: 'none';
  readonly all: 'all';
  readonly default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform';
  readonly colors: 'background-color, border-color, color, fill, stroke';
  readonly opacity: 'opacity';
  readonly shadow: 'box-shadow';
  readonly transform: 'transform';
  readonly size: 'width, height';
};
export declare const transitions: {
  readonly button: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)';
  readonly buttonHover: 'all 200ms cubic-bezier(0, 0, 0.2, 1)';
  readonly input: 'border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)';
  readonly inputFocus: 'all 200ms cubic-bezier(0, 0, 0.2, 1)';
  readonly fade: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)';
  readonly fadeIn: 'opacity 300ms cubic-bezier(0, 0, 0.2, 1)';
  readonly fadeOut: 'opacity 150ms cubic-bezier(0.4, 0, 1, 1)';
  readonly scale: 'transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  readonly scaleIn: 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)';
  readonly slide: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)';
  readonly slideIn: 'transform 300ms cubic-bezier(0, 0, 0.2, 1)';
  readonly slideOut: 'transform 150ms cubic-bezier(0.4, 0, 1, 1)';
  readonly color: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)';
  readonly background: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)';
  readonly interactive: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)';
  readonly smooth: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)';
  readonly snappy: 'all 100ms cubic-bezier(0, 0, 0.2, 1)';
};
export declare const keyframes: {
  readonly fadeIn: '\n    @keyframes fadeIn {\n      from { opacity: 0; }\n      to { opacity: 1; }\n    }\n  ';
  readonly fadeOut: '\n    @keyframes fadeOut {\n      from { opacity: 1; }\n      to { opacity: 0; }\n    }\n  ';
  readonly scaleIn: '\n    @keyframes scaleIn {\n      from { transform: scale(0.95); opacity: 0; }\n      to { transform: scale(1); opacity: 1; }\n    }\n  ';
  readonly scaleOut: '\n    @keyframes scaleOut {\n      from { transform: scale(1); opacity: 1; }\n      to { transform: scale(0.95); opacity: 0; }\n    }\n  ';
  readonly slideInFromTop: '\n    @keyframes slideInFromTop {\n      from { transform: translateY(-100%); opacity: 0; }\n      to { transform: translateY(0); opacity: 1; }\n    }\n  ';
  readonly slideInFromBottom: '\n    @keyframes slideInFromBottom {\n      from { transform: translateY(100%); opacity: 0; }\n      to { transform: translateY(0); opacity: 1; }\n    }\n  ';
  readonly slideInFromLeft: '\n    @keyframes slideInFromLeft {\n      from { transform: translateX(-100%); opacity: 0; }\n      to { transform: translateX(0); opacity: 1; }\n    }\n  ';
  readonly slideInFromRight: '\n    @keyframes slideInFromRight {\n      from { transform: translateX(100%); opacity: 0; }\n      to { transform: translateX(0); opacity: 1; }\n    }\n  ';
  readonly bounce: '\n    @keyframes bounce {\n      0%, 100% { transform: translateY(0); }\n      50% { transform: translateY(-10px); }\n    }\n  ';
  readonly bounceIn: '\n    @keyframes bounceIn {\n      0% { transform: scale(0.3); opacity: 0; }\n      50% { transform: scale(1.05); }\n      70% { transform: scale(0.9); }\n      100% { transform: scale(1); opacity: 1; }\n    }\n  ';
  readonly pulse: '\n    @keyframes pulse {\n      0%, 100% { opacity: 1; }\n      50% { opacity: 0.5; }\n    }\n  ';
  readonly ping: '\n    @keyframes ping {\n      75%, 100% {\n        transform: scale(2);\n        opacity: 0;\n      }\n    }\n  ';
  readonly spin: '\n    @keyframes spin {\n      from { transform: rotate(0deg); }\n      to { transform: rotate(360deg); }\n    }\n  ';
  readonly shake: '\n    @keyframes shake {\n      0%, 100% { transform: translateX(0); }\n      10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }\n      20%, 40%, 60%, 80% { transform: translateX(4px); }\n    }\n  ';
  readonly shimmer: '\n    @keyframes shimmer {\n      0% { background-position: -200% 0; }\n      100% { background-position: 200% 0; }\n    }\n  ';
};
export declare const animationPresets: {
  readonly spin: 'spin 1s linear infinite';
  readonly ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite';
  readonly pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite';
  readonly bounce: 'bounce 1s infinite';
  readonly fadeIn: 'fadeIn 200ms ease-out';
  readonly fadeOut: 'fadeOut 150ms ease-in';
  readonly scaleIn: 'scaleIn 200ms ease-out';
  readonly scaleOut: 'scaleOut 150ms ease-in';
  readonly slideInFromTop: 'slideInFromTop 300ms ease-out';
  readonly slideInFromBottom: 'slideInFromBottom 300ms ease-out';
  readonly slideInFromLeft: 'slideInFromLeft 300ms ease-out';
  readonly slideInFromRight: 'slideInFromRight 300ms ease-out';
  readonly shake: 'shake 0.5s ease-in-out';
  readonly shimmer: 'shimmer 2s infinite linear';
};
export type Duration = typeof duration;
export type Easing = typeof easing;
export type TransitionProperty = typeof transitionProperty;
export type Transitions = typeof transitions;
export type Keyframes = typeof keyframes;
export type AnimationPresets = typeof animationPresets;
//# sourceMappingURL=animations.d.ts.map
