import {
  Transition,
  TransitionGroup,
  createBlock,
  mergeProps,
  openBlock,
  renderSlot,
  resolveDynamicComponent,
  toHandlers,
  withCtx
} from "./chunk-LW4I4DCF.js";
import "./chunk-BUSYA2B4.js";

// node_modules/@morev/utils/dist/chunk-EJGCYSTB.js
var clamp = (value, min = -Infinity, max = Infinity) => Math.max(
  min ?? -Infinity,
  Math.min(value, max ?? Infinity)
);

// node_modules/@morev/utils/dist/chunk-F45GO7K2.js
var isUndefined = (value) => value === void 0;

// node_modules/@morev/utils/dist/chunk-TK4YRMRC.js
var isNull = (value) => value === null;

// node_modules/@morev/utils/dist/chunk-Z5IVBZLV.js
var isNullish = (value) => isNull(value) || isUndefined(value);

// node_modules/@morev/utils/dist/chunk-XUWL4VKZ.js
var isObject = (value) => Object.prototype.toString.call(value).includes("Object");

// node_modules/@morev/utils/dist/chunk-HJKYC4E4.js
var isIterable = (value) => (
  // eslint-disable-next-line unicorn/new-for-builtins
  Symbol.iterator in Object(value)
);

// node_modules/@morev/utils/dist/chunk-MYOGSMXY.js
var isEmpty = (value) => {
  if (value === void 0) return true;
  if (value === null) return true;
  if (value === false) return true;
  if (Number.isNaN(value)) return true;
  if (value === 0) return true;
  if (value === BigInt(0)) return true;
  if (value === "") return true;
  if (isIterable(value) && typeof value === "object" && "length" in value && value.length === 0) return true;
  if (isIterable(value) && typeof value === "object" && "size" in value && value.size === 0) return true;
  if (isObject(value)) return !Object.keys(value).length;
  return false;
};

// node_modules/@morev/utils/dist/chunk-G3ENWOTI.js
var typeMap = {
  "condition": "Assert condition failed",
  "no-value": "Assert value not undefined/null failed"
};
var messageFormatter = (failureType, message, properties) => {
  return [
    typeMap[failureType],
    message ? `: ${message}` : null,
    !isEmpty(properties) ? `: ${JSON.stringify(properties)}` : null
  ].filter(Boolean).join("");
};
var errorCreatorFactory = (formatter) => (failureType, message, properties) => new Error(formatter(failureType, message, properties));
var createConfiguration = () => ({
  formatter: messageFormatter,
  errorCreator: errorCreatorFactory(messageFormatter)
});

// node_modules/@morev/utils/dist/chunk-CQJCSTBU.js
var isFunction = (value) => Object.prototype.toString.call(value) === "[object Function]";

// node_modules/@morev/utils/dist/chunk-42JGV6MK.js
var isBoolean = (value) => value === true || value === false;

// node_modules/@morev/utils/dist/chunk-MHPJZ3EK.js
var configuration = createConfiguration();
var _createAssert = (soft) => (conditionOrValue, message, properties) => {
  const createError = (type, props2) => configuration.errorCreator(type, message, props2);
  const report = (type, props2, error) => {
    var _a2, _b;
    error && ((_a2 = configuration.errorReporter) == null ? void 0 : _a2.call(configuration, type, error, message, props2));
    !error && ((_b = configuration.warningReporter) == null ? void 0 : _b.call(configuration, type, message, props2));
  };
  const props = isFunction(properties) ? properties() : properties ?? {};
  if (isBoolean(conditionOrValue) && !conditionOrValue) {
    if (!soft) {
      const error = createError("condition", props);
      report("condition", props, error);
      throw error;
    }
    report("condition", props);
    return false;
  }
  if (isNullish(conditionOrValue)) {
    if (!soft) {
      const error = createError("no-value", props);
      report("no-value", props, error);
      throw error;
    }
    report("no-value", props);
    return false;
  }
  return conditionOrValue;
};
var hardAssert = _createAssert(false);
var softAssert = _createAssert(true);
var _assert = hardAssert;
_assert.soft = softAssert;

// node_modules/@morev/utils/dist/chunk-OBG63REY.js
var isNumeric = (value) => typeof value === "number" && !isNaN(value);

// node_modules/@morev/utils/dist/chunk-UDVSPJHY.js
var isArray = (value) => Array.isArray(value);

// node_modules/@morev/utils/dist/chunk-UOWY6RIU.js
var isDate = (value, checkValidity) => {
  const isDateObject = Object.prototype.toString.call(value).includes("Date");
  if (!isDateObject) return false;
  if (!checkValidity) return isDateObject;
  return !Number.isNaN(value.getTime());
};

// node_modules/@morev/utils/dist/chunk-RUB2ELNH.js
var isString = (value) => Object.prototype.toString.call(value) === "[object String]";

// node_modules/@morev/utils/dist/chunk-4W3EM56D.js
var isInteger = (value) => Number.isInteger(value);

// node_modules/@morev/utils/dist/chunk-G4Y5YQL7.js
var ISO_DATETIME_REG_EXP = /^(\d{4})-(0[1-9]|1[02])-(0[1-9]|[12]\d|3[01])(?:[ T](0\d|1\d|2[0-3]):([0-5]\d):([0-5]\d)(?:\.(\d{3}))?(?:Z|([+-](?:0\d|1\d|2[0-3])(?::?[0-5]\d)?))?)?$/;
var RU_DATETIME_REG_EXP = /^([1-9]|0\d|[12]\d|3[01])\.(0[1-9]|[1-9]|1[0-2])\.(\d{4})(?:\s*([01]\d|2[0-3]|\d)(?::(0\d|[1-5]\d|\d))?(?::(0\d|[1-5]\d|\d))?(?:.(\d{3}))?)?$/;
var EN_DATETIME_REG_EXP = /^(0[1-9]|[1-9]|1[0-2])\/([1-9]|0\d|[12]\d|3[01])\/(\d{4})(?:\s*([01]\d|2[0-3]|\d)(?::(0\d|[1-5]\d|\d))?(?::(0\d|[1-5]\d|\d))?(?:.(\d{3}))?)?$/;
var prefixedDateMethodsFactory = (type, utc) => {
  return (string) => {
    const prefix = /* @__PURE__ */ (() => {
      const value = type === "get" ? utc ? "getUTC" : "get" : utc ? "setUTC" : "set";
      return value;
    })();
    return `${prefix}${string}`;
  };
};
var createDateFromTokens = (tokens) => {
  const date = new Date(Date.UTC(tokens.year, tokens.month, tokens.day));
  if (date.getUTCMonth() !== tokens.month || date.getUTCDate() !== tokens.day) {
    return null;
  }
  date.setUTCHours(tokens.hours);
  date.setUTCMinutes(tokens.minutes);
  date.setUTCSeconds(tokens.seconds);
  date.setUTCMilliseconds(tokens.milliseconds);
  if (!tokens.offset) return date;
  date.setUTCMinutes(date.getUTCMinutes() + tokens.offset);
  return date;
};

// node_modules/@morev/utils/dist/chunk-KFM23YRT.js
var tokensFromDate = (date, utc) => {
  if (!date) return null;
  const get = prefixedDateMethodsFactory("get", utc);
  date.setUTCMinutes(date.getUTCMinutes() + (/* @__PURE__ */ new Date()).getTimezoneOffset());
  const year = date[get("FullYear")]();
  const month = date[get("Month")]();
  const day = date[get("Date")]();
  const hours = date[get("Hours")]();
  const minutes = date[get("Minutes")]();
  const seconds = date[get("Seconds")]();
  const milliseconds = date[get("Milliseconds")]();
  return { year, month, day, hours, minutes, seconds, milliseconds };
};
var DEFAULT_OPTIONS = { utc: false };
var parseDate = (input, userOptions) => {
  const options = { ...DEFAULT_OPTIONS, ...userOptions };
  if (isDate(input)) {
    if (!isDate(input, true)) return null;
    const year = input.getFullYear();
    const month = input.getMonth();
    const day = input.getDate();
    const hours = input.getHours();
    const minutes = input.getMinutes();
    const seconds = input.getSeconds();
    const milliseconds = input.getMilliseconds();
    return tokensFromDate(
      createDateFromTokens({ year, month, day, hours, minutes, seconds, milliseconds }),
      options.utc
    );
  }
  if (isInteger(input)) {
    return tokensFromDate(new Date(input), options.utc);
  }
  let match = input.match(ISO_DATETIME_REG_EXP);
  if (match) {
    const [
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
      milliseconds,
      offset
    ] = match.slice(1).map((part, index3) => {
      if (isUndefined(part)) return 0;
      if (index3 === 1) return Number(part) - 1;
      if (index3 === 7) {
        const [sign, offsetString] = [part[0], part.slice(1)];
        const offset2 = (() => {
          if (offsetString.length === 2) {
            return Number(offsetString) * 60;
          }
          if (offsetString.length === 4) {
            return Number(offsetString.slice(0, 2)) * 60 + Number(offsetString.slice(2));
          }
          return Number(offsetString.slice(0, 2)) * 60 + Number(offsetString.slice(3));
        })();
        return sign === "+" ? offset2 : -offset2;
      }
      return Number(part);
    });
    return tokensFromDate(
      createDateFromTokens({ year, month, day, hours, minutes, seconds, milliseconds, offset }),
      options.utc
    );
  }
  match = input.match(RU_DATETIME_REG_EXP);
  if (match) {
    const [
      day,
      month,
      year,
      hours,
      minutes,
      seconds,
      milliseconds
    ] = match.slice(1).map((part, index3) => {
      if (isUndefined(part)) return 0;
      if (index3 === 1) return Number(part) - 1;
      return Number(part);
    });
    return tokensFromDate(
      createDateFromTokens({ year, month, day, hours, minutes, seconds, milliseconds }),
      options.utc
    );
  }
  match = input.match(EN_DATETIME_REG_EXP);
  if (match) {
    const [
      month,
      day,
      year,
      hours,
      minutes,
      seconds,
      milliseconds
    ] = match.slice(1).map((part, index3) => {
      if (isUndefined(part)) return 0;
      if (index3 === 0) return Number(part) - 1;
      return Number(part);
    });
    return tokensFromDate(
      createDateFromTokens({ year, month, day, hours, minutes, seconds, milliseconds }),
      options.utc
    );
  }
  return null;
};

// node_modules/@morev/utils/dist/chunk-YTKBKGCJ.js
var DEFAULT_OPTIONS2 = { utc: false };
var toDate = (value, userOptions) => {
  const options = { ...DEFAULT_OPTIONS2, ...userOptions };
  const tokens = parseDate(value, { utc: options.utc });
  if (!tokens) return null;
  const offset = (/* @__PURE__ */ new Date()).getTimezoneOffset();
  return createDateFromTokens({
    ...tokens,
    offset: options.utc ? -offset : offset
  });
};

// node_modules/@morev/utils/dist/chunk-M5HBLC4T.js
var FORMAT_DATE_LOCALE_EN = {
  name: "en",
  values: {
    firstDayOfWeekIndex: 0,
    dayNames: {
      abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    monthNames: {
      abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
  }
};
var FORMAT_DATE_LOCALE_RU = {
  name: "ru",
  values: {
    firstDayOfWeekIndex: 1,
    dayNames: {
      abbreviated: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      wide: [
        ["Воскресенье", "В воскресенье"],
        ["Понедельник", "В понедельник"],
        ["Вторник", "Во вторник"],
        ["Среда", "В среду"],
        ["Четверг", "В четверг"],
        ["Пятница", "В пятницу"],
        ["Суббота", "В субботу"]
      ]
    },
    monthNames: {
      abbreviated: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      wide: [
        ["Январь", "Января"],
        ["Февраль", "Февраля"],
        ["Март", "Марта"],
        ["Апрель", "Апреля"],
        ["Май", "Мая"],
        ["Июнь", "Июня"],
        ["Июль", "Июля"],
        ["Август", "Августа"],
        ["Сентябрь", "Сентября"],
        ["Октябрь", "Октября"],
        ["Ноябрь", "Ноября"],
        ["Декабрь", "Декабря"]
      ]
    }
  }
};

// node_modules/@morev/utils/dist/chunk-WDLKPA7O.js
var padStart = (input, maxLength = 2, fillString = "0") => input.toString().padStart(maxLength, fillString);

// node_modules/@morev/utils/dist/chunk-ZH3ZSQ4E.js
var TOKEN = /H{1,2}|L{1,4}|M{1,4}|X{1,3}|_L{3,4}|_M{3,4}|_c{3,4}|_e{3,4}|c{1,4}|d{1,2}|e{1,4}|h{1,2}|m{1,2}|s{1,2}|yy(?:yy)?|\[[^\]]*]/g;
var ORDERED_DAY_INDICES = [0, 1, 2, 3, 4, 5, 6];
var pad = (value, length = 2) => padStart(value, length, "0");

// node_modules/@morev/utils/dist/chunk-AQ4NUHLD.js
var _mergeObjects = (defaults2, input, stack = "", merger) => {
  const result = { ...defaults2 };
  if (!isObject(input)) return result;
  Object.entries(input).forEach(([key, val]) => {
    if (merger == null ? void 0 : merger(result, key, val, stack)) return;
    if (isObject(val) && isObject(result[key])) {
      Object.assign(result, { [key]: _mergeObjects(result[key], val, (stack ? `${stack}.` : "") + key, merger) });
    } else {
      Object.assign(result, { [key]: val });
    }
  });
  return result;
};
var createMergeObjects = (merger) => (...args) => args.reduce((p, c) => _mergeObjects(p, c, "", merger), {});
var mergeObjects = createMergeObjects();

// node_modules/@morev/utils/dist/chunk-OAZLYBJA.js
var toArray = (value) => [value].flat();

// node_modules/@morev/utils/dist/chunk-I23E2RTO.js
var _formatDate = (pattern, locales, input, options) => {
  var _a2;
  const { utc, locale } = options;
  const date = toDate(input);
  if (!date) return null;
  const $i18n = (_a2 = locales.find(({ name }) => name === locale)) == null ? void 0 : _a2.values;
  if (!$i18n) {
    throw new Error(`The locale object for locale \`${locale}\` does not exists.`);
  }
  const localized = (entity, type, variant, index3) => {
    const _type = toArray($i18n[`${entity}Names`][type][index3]);
    return variant === "standalone" ? _type[0] : _type[1] ?? _type[0];
  };
  const get = prefixedDateMethodsFactory("get", utc);
  const day = () => date[get("Date")]();
  const weekday = () => date[get("Day")]();
  const month = () => date[get("Month")]();
  const year = () => date[get("FullYear")]();
  const hours = () => date[get("Hours")]();
  const minutes = () => date[get("Minutes")]();
  const seconds = () => date[get("Seconds")]();
  const weekdayIndex = () => {
    const offset = weekday() - $i18n.firstDayOfWeekIndex;
    return ORDERED_DAY_INDICES.at(offset) + 1;
  };
  const timezone = (format) => {
    const offset = utc ? 0 : date.getTimezoneOffset();
    if (offset === 0) return "Z";
    const sign = offset < 0 ? "+" : "-";
    const offsetHours = Math.floor(Math.abs(offset) / 60);
    const offsetMinutes = Math.abs(offset) - offsetHours * 60;
    const joinCharacter = ["basic", "minimal"].includes(format) ? "" : ":";
    const filterer = format === "minimal" ? (value) => value !== 0 : (value) => true;
    const time = [offsetHours, offsetMinutes].filter((value) => filterer(value)).map((part) => pad(part)).join(joinCharacter);
    return `${sign}${time}`;
  };
  const matchers = {
    // Year
    yy: () => year().toString().slice(-2),
    yyyy: () => pad(year(), 4),
    // Month (standalone)
    L: () => month() + 1,
    LL: () => pad(month() + 1),
    LLL: () => localized("month", "abbreviated", "standalone", month()),
    _LLL: () => localized("month", "abbreviated", "standalone", month()).toLocaleLowerCase(),
    LLLL: () => localized("month", "wide", "standalone", month()),
    _LLLL: () => localized("month", "wide", "standalone", month()).toLocaleLowerCase(),
    // Month (format)
    M: () => month() + 1,
    MM: () => pad(month() + 1),
    MMM: () => localized("month", "abbreviated", "format", month()),
    _MMM: () => localized("month", "abbreviated", "format", month()).toLocaleLowerCase(),
    MMMM: () => localized("month", "wide", "format", month()),
    _MMMM: () => localized("month", "wide", "format", month()).toLocaleLowerCase(),
    // Weekday (standalone)
    c: () => weekdayIndex(),
    cc: () => pad(weekdayIndex()),
    ccc: () => localized("day", "abbreviated", "standalone", weekday()),
    _ccc: () => localized("day", "abbreviated", "standalone", weekday()).toLocaleLowerCase(),
    cccc: () => localized("day", "wide", "standalone", weekday()),
    _cccc: () => localized("day", "wide", "standalone", weekday()).toLocaleLowerCase(),
    // Weekday (format)
    e: () => weekdayIndex(),
    ee: () => pad(weekdayIndex()),
    eee: () => localized("day", "abbreviated", "format", weekday()),
    _eee: () => localized("day", "abbreviated", "format", weekday()).toLocaleLowerCase(),
    eeee: () => localized("day", "wide", "format", weekday()),
    _eeee: () => localized("day", "wide", "format", weekday()).toLocaleLowerCase(),
    // Day
    d: () => day(),
    dd: () => pad(day()),
    // Hours
    h: () => hours() % 12 || 12,
    hh: () => pad(hours() % 12 || 12),
    H: () => hours(),
    HH: () => pad(hours()),
    // Minutes
    m: () => minutes(),
    mm: () => pad(minutes()),
    // Seconds
    s: () => seconds(),
    ss: () => pad(seconds()),
    // Timezone as JS-compatible string
    X: () => timezone("minimal"),
    XX: () => timezone("basic"),
    XXX: () => timezone("extended")
  };
  return pattern.replaceAll(TOKEN, (match) => {
    if (match in matchers) {
      return matchers[match]();
    }
    return match.slice(1, -1);
  });
};
var createFormatDate = (localeData, defaultOptions) => {
  return (pattern, input = /* @__PURE__ */ new Date(), options) => {
    return _formatDate(pattern, toArray(localeData), input, mergeObjects(defaultOptions, options));
  };
};
var formatDate = createFormatDate([FORMAT_DATE_LOCALE_EN, FORMAT_DATE_LOCALE_RU], { utc: false, locale: "en" });
var formatDateRu = createFormatDate(FORMAT_DATE_LOCALE_RU, { utc: false, locale: "ru" });
var formatDateEn = createFormatDate(FORMAT_DATE_LOCALE_EN, { utc: false, locale: "en" });

// node_modules/ohash/dist/shared/ohash.BvSMZzli.mjs
var defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
var defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
var nativeFunc = "[native code] }";
var nativeFuncLength = nativeFunc.length;

// node_modules/@morev/utils/dist/chunk-PRSBP434.js
var REFERENCE_TABLE = {
  metric: [
    { from: 0, to: 1e3, prefix: "b" },
    { from: 1e3, to: 1e6, prefix: "k" },
    { from: 1e6, to: 1e9, prefix: "m" },
    { from: 1e9, to: 1e12, prefix: "g" },
    { from: 1e12, to: 1e15, prefix: "t" },
    { from: 1e15, to: 1e18, prefix: "p" },
    { from: 1e18, to: 1e21, prefix: "e" },
    { from: 1e21, to: 1e24, prefix: "z" },
    { from: 1e24, to: 1e27, prefix: "y" }
  ],
  IEC: [
    { from: 0, to: 1024 ** 1, prefix: "b" },
    { from: 1024 ** 1, to: 1024 ** 2, prefix: "k" },
    { from: 1024 ** 2, to: 1024 ** 3, prefix: "m" },
    { from: 1024 ** 3, to: 1024 ** 4, prefix: "g" },
    { from: 1024 ** 4, to: 1024 ** 5, prefix: "t" },
    { from: 1024 ** 5, to: 1024 ** 6, prefix: "p" },
    { from: 1024 ** 6, to: 1024 ** 7, prefix: "e" },
    { from: 1024 ** 7, to: 1024 ** 8, prefix: "z" },
    { from: 1024 ** 8, to: 1024 ** 9, prefix: "y" }
  ]
};

// node_modules/fast-copy/dist/esm/index.mjs
var toStringFunction = Function.prototype.toString;
var create = Object.create;
var toStringObject = Object.prototype.toString;
var LegacyCache = (
  /** @class */
  function() {
    function LegacyCache2() {
      this._keys = [];
      this._values = [];
    }
    LegacyCache2.prototype.has = function(key) {
      return !!~this._keys.indexOf(key);
    };
    LegacyCache2.prototype.get = function(key) {
      return this._values[this._keys.indexOf(key)];
    };
    LegacyCache2.prototype.set = function(key, value) {
      this._keys.push(key);
      this._values.push(value);
    };
    return LegacyCache2;
  }()
);
function createCacheLegacy() {
  return new LegacyCache();
}
function createCacheModern() {
  return /* @__PURE__ */ new WeakMap();
}
var createCache = typeof WeakMap !== "undefined" ? createCacheModern : createCacheLegacy;
function getCleanClone(prototype) {
  if (!prototype) {
    return create(null);
  }
  var Constructor = prototype.constructor;
  if (Constructor === Object) {
    return prototype === Object.prototype ? {} : create(prototype);
  }
  if (Constructor && ~toStringFunction.call(Constructor).indexOf("[native code]")) {
    try {
      return new Constructor();
    } catch (_a2) {
    }
  }
  return create(prototype);
}
function getRegExpFlagsLegacy(regExp) {
  var flags = "";
  if (regExp.global) {
    flags += "g";
  }
  if (regExp.ignoreCase) {
    flags += "i";
  }
  if (regExp.multiline) {
    flags += "m";
  }
  if (regExp.unicode) {
    flags += "u";
  }
  if (regExp.sticky) {
    flags += "y";
  }
  return flags;
}
function getRegExpFlagsModern(regExp) {
  return regExp.flags;
}
var getRegExpFlags = /test/g.flags === "g" ? getRegExpFlagsModern : getRegExpFlagsLegacy;
function getTagLegacy(value) {
  var type = toStringObject.call(value);
  return type.substring(8, type.length - 1);
}
function getTagModern(value) {
  return value[Symbol.toStringTag] || getTagLegacy(value);
}
var getTag = typeof Symbol !== "undefined" ? getTagModern : getTagLegacy;
var defineProperty = Object.defineProperty;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var _a = Object.prototype;
var hasOwnProperty = _a.hasOwnProperty;
var propertyIsEnumerable = _a.propertyIsEnumerable;
var SUPPORTS_SYMBOL = typeof getOwnPropertySymbols === "function";
function getStrictPropertiesModern(object) {
  return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
}
var getStrictProperties = SUPPORTS_SYMBOL ? getStrictPropertiesModern : getOwnPropertyNames;
function copyOwnPropertiesStrict(value, clone, state) {
  var properties = getStrictProperties(value);
  for (var index3 = 0, length_1 = properties.length, property = void 0, descriptor = void 0; index3 < length_1; ++index3) {
    property = properties[index3];
    if (property === "callee" || property === "caller") {
      continue;
    }
    descriptor = getOwnPropertyDescriptor(value, property);
    if (!descriptor) {
      clone[property] = state.copier(value[property], state);
      continue;
    }
    if (!descriptor.get && !descriptor.set) {
      descriptor.value = state.copier(descriptor.value, state);
    }
    try {
      defineProperty(clone, property, descriptor);
    } catch (error) {
      clone[property] = descriptor.value;
    }
  }
  return clone;
}
function copyArrayLoose(array, state) {
  var clone = new state.Constructor();
  state.cache.set(array, clone);
  for (var index3 = 0, length_2 = array.length; index3 < length_2; ++index3) {
    clone[index3] = state.copier(array[index3], state);
  }
  return clone;
}
function copyArrayStrict(array, state) {
  var clone = new state.Constructor();
  state.cache.set(array, clone);
  return copyOwnPropertiesStrict(array, clone, state);
}
function copyArrayBuffer(arrayBuffer, _state) {
  return arrayBuffer.slice(0);
}
function copyBlob(blob, _state) {
  return blob.slice(0, blob.size, blob.type);
}
function copyDataView(dataView, state) {
  return new state.Constructor(copyArrayBuffer(dataView.buffer));
}
function copyDate(date, state) {
  return new state.Constructor(date.getTime());
}
function copyMapLoose(map, state) {
  var clone = new state.Constructor();
  state.cache.set(map, clone);
  map.forEach(function(value, key) {
    clone.set(key, state.copier(value, state));
  });
  return clone;
}
function copyMapStrict(map, state) {
  return copyOwnPropertiesStrict(map, copyMapLoose(map, state), state);
}
function copyObjectLooseLegacy(object, state) {
  var clone = getCleanClone(state.prototype);
  state.cache.set(object, clone);
  for (var key in object) {
    if (hasOwnProperty.call(object, key)) {
      clone[key] = state.copier(object[key], state);
    }
  }
  return clone;
}
function copyObjectLooseModern(object, state) {
  var clone = getCleanClone(state.prototype);
  state.cache.set(object, clone);
  for (var key in object) {
    if (hasOwnProperty.call(object, key)) {
      clone[key] = state.copier(object[key], state);
    }
  }
  var symbols = getOwnPropertySymbols(object);
  for (var index3 = 0, length_3 = symbols.length, symbol = void 0; index3 < length_3; ++index3) {
    symbol = symbols[index3];
    if (propertyIsEnumerable.call(object, symbol)) {
      clone[symbol] = state.copier(object[symbol], state);
    }
  }
  return clone;
}
var copyObjectLoose = SUPPORTS_SYMBOL ? copyObjectLooseModern : copyObjectLooseLegacy;
function copyObjectStrict(object, state) {
  var clone = getCleanClone(state.prototype);
  state.cache.set(object, clone);
  return copyOwnPropertiesStrict(object, clone, state);
}
function copyPrimitiveWrapper(primitiveObject, state) {
  return new state.Constructor(primitiveObject.valueOf());
}
function copyRegExp(regExp, state) {
  var clone = new state.Constructor(regExp.source, getRegExpFlags(regExp));
  clone.lastIndex = regExp.lastIndex;
  return clone;
}
function copySelf(value, _state) {
  return value;
}
function copySetLoose(set, state) {
  var clone = new state.Constructor();
  state.cache.set(set, clone);
  set.forEach(function(value) {
    clone.add(state.copier(value, state));
  });
  return clone;
}
function copySetStrict(set, state) {
  return copyOwnPropertiesStrict(set, copySetLoose(set, state), state);
}
var isArray2 = Array.isArray;
var assign = Object.assign;
var getPrototypeOf = Object.getPrototypeOf || function(obj) {
  return obj.__proto__;
};
var DEFAULT_LOOSE_OPTIONS = {
  array: copyArrayLoose,
  arrayBuffer: copyArrayBuffer,
  blob: copyBlob,
  dataView: copyDataView,
  date: copyDate,
  error: copySelf,
  map: copyMapLoose,
  object: copyObjectLoose,
  regExp: copyRegExp,
  set: copySetLoose
};
var DEFAULT_STRICT_OPTIONS = assign({}, DEFAULT_LOOSE_OPTIONS, {
  array: copyArrayStrict,
  map: copyMapStrict,
  object: copyObjectStrict,
  set: copySetStrict
});
function getTagSpecificCopiers(options) {
  return {
    Arguments: options.object,
    Array: options.array,
    ArrayBuffer: options.arrayBuffer,
    Blob: options.blob,
    Boolean: copyPrimitiveWrapper,
    DataView: options.dataView,
    Date: options.date,
    Error: options.error,
    Float32Array: options.arrayBuffer,
    Float64Array: options.arrayBuffer,
    Int8Array: options.arrayBuffer,
    Int16Array: options.arrayBuffer,
    Int32Array: options.arrayBuffer,
    Map: options.map,
    Number: copyPrimitiveWrapper,
    Object: options.object,
    Promise: copySelf,
    RegExp: options.regExp,
    Set: options.set,
    String: copyPrimitiveWrapper,
    WeakMap: copySelf,
    WeakSet: copySelf,
    Uint8Array: options.arrayBuffer,
    Uint8ClampedArray: options.arrayBuffer,
    Uint16Array: options.arrayBuffer,
    Uint32Array: options.arrayBuffer,
    Uint64Array: options.arrayBuffer
  };
}
function createCopier(options) {
  var normalizedOptions = assign({}, DEFAULT_LOOSE_OPTIONS, options);
  var tagSpecificCopiers = getTagSpecificCopiers(normalizedOptions);
  var array = tagSpecificCopiers.Array, object = tagSpecificCopiers.Object;
  function copier(value, state) {
    state.prototype = state.Constructor = void 0;
    if (!value || typeof value !== "object") {
      return value;
    }
    if (state.cache.has(value)) {
      return state.cache.get(value);
    }
    state.prototype = getPrototypeOf(value);
    state.Constructor = state.prototype && state.prototype.constructor;
    if (!state.Constructor || state.Constructor === Object) {
      return object(value, state);
    }
    if (isArray2(value)) {
      return array(value, state);
    }
    var tagSpecificCopier = tagSpecificCopiers[getTag(value)];
    if (tagSpecificCopier) {
      return tagSpecificCopier(value, state);
    }
    return typeof value.then === "function" ? value : object(value, state);
  }
  return function copy2(value) {
    return copier(value, {
      Constructor: void 0,
      cache: createCache(),
      copier,
      prototype: void 0
    });
  };
}
function createStrictCopier(options) {
  return createCopier(assign({}, DEFAULT_STRICT_OPTIONS, options));
}
var copyStrict = createStrictCopier({});
var index = createCopier({});

// node_modules/@morev/utils/dist/chunk-Q5PZZCDY.js
var copy = createCopier({});

// node_modules/fast-equals/dist/esm/index.mjs
var getOwnPropertyNames2 = Object.getOwnPropertyNames;
var getOwnPropertySymbols2 = Object.getOwnPropertySymbols;
var hasOwnProperty2 = Object.prototype.hasOwnProperty;
function combineComparators(comparatorA, comparatorB) {
  return function isEqual2(a, b, state) {
    return comparatorA(a, b, state) && comparatorB(a, b, state);
  };
}
function createIsCircular(areItemsEqual) {
  return function isCircular(a, b, state) {
    if (!a || !b || typeof a !== "object" || typeof b !== "object") {
      return areItemsEqual(a, b, state);
    }
    var cache = state.cache;
    var cachedA = cache.get(a);
    var cachedB = cache.get(b);
    if (cachedA && cachedB) {
      return cachedA === b && cachedB === a;
    }
    cache.set(a, b);
    cache.set(b, a);
    var result = areItemsEqual(a, b, state);
    cache.delete(a);
    cache.delete(b);
    return result;
  };
}
function getStrictProperties2(object) {
  return getOwnPropertyNames2(object).concat(getOwnPropertySymbols2(object));
}
var hasOwn = Object.hasOwn || function(object, property) {
  return hasOwnProperty2.call(object, property);
};
function sameValueZeroEqual(a, b) {
  return a === b || !a && !b && a !== a && b !== b;
}
var PREACT_VNODE = "__v";
var PREACT_OWNER = "__o";
var REACT_OWNER = "_owner";
var getOwnPropertyDescriptor2 = Object.getOwnPropertyDescriptor;
var keys = Object.keys;
function areArraysEqual(a, b, state) {
  var index3 = a.length;
  if (b.length !== index3) {
    return false;
  }
  while (index3-- > 0) {
    if (!state.equals(a[index3], b[index3], index3, index3, a, b, state)) {
      return false;
    }
  }
  return true;
}
function areDatesEqual(a, b) {
  return sameValueZeroEqual(a.getTime(), b.getTime());
}
function areErrorsEqual(a, b) {
  return a.name === b.name && a.message === b.message && a.cause === b.cause && a.stack === b.stack;
}
function areFunctionsEqual(a, b) {
  return a === b;
}
function areMapsEqual(a, b, state) {
  var size = a.size;
  if (size !== b.size) {
    return false;
  }
  if (!size) {
    return true;
  }
  var matchedIndices = new Array(size);
  var aIterable = a.entries();
  var aResult;
  var bResult;
  var index3 = 0;
  while (aResult = aIterable.next()) {
    if (aResult.done) {
      break;
    }
    var bIterable = b.entries();
    var hasMatch = false;
    var matchIndex = 0;
    while (bResult = bIterable.next()) {
      if (bResult.done) {
        break;
      }
      if (matchedIndices[matchIndex]) {
        matchIndex++;
        continue;
      }
      var aEntry = aResult.value;
      var bEntry = bResult.value;
      if (state.equals(aEntry[0], bEntry[0], index3, matchIndex, a, b, state) && state.equals(aEntry[1], bEntry[1], aEntry[0], bEntry[0], a, b, state)) {
        hasMatch = matchedIndices[matchIndex] = true;
        break;
      }
      matchIndex++;
    }
    if (!hasMatch) {
      return false;
    }
    index3++;
  }
  return true;
}
var areNumbersEqual = sameValueZeroEqual;
function areObjectsEqual(a, b, state) {
  var properties = keys(a);
  var index3 = properties.length;
  if (keys(b).length !== index3) {
    return false;
  }
  while (index3-- > 0) {
    if (!isPropertyEqual(a, b, state, properties[index3])) {
      return false;
    }
  }
  return true;
}
function areObjectsEqualStrict(a, b, state) {
  var properties = getStrictProperties2(a);
  var index3 = properties.length;
  if (getStrictProperties2(b).length !== index3) {
    return false;
  }
  var property;
  var descriptorA;
  var descriptorB;
  while (index3-- > 0) {
    property = properties[index3];
    if (!isPropertyEqual(a, b, state, property)) {
      return false;
    }
    descriptorA = getOwnPropertyDescriptor2(a, property);
    descriptorB = getOwnPropertyDescriptor2(b, property);
    if ((descriptorA || descriptorB) && (!descriptorA || !descriptorB || descriptorA.configurable !== descriptorB.configurable || descriptorA.enumerable !== descriptorB.enumerable || descriptorA.writable !== descriptorB.writable)) {
      return false;
    }
  }
  return true;
}
function arePrimitiveWrappersEqual(a, b) {
  return sameValueZeroEqual(a.valueOf(), b.valueOf());
}
function areRegExpsEqual(a, b) {
  return a.source === b.source && a.flags === b.flags;
}
function areSetsEqual(a, b, state) {
  var size = a.size;
  if (size !== b.size) {
    return false;
  }
  if (!size) {
    return true;
  }
  var matchedIndices = new Array(size);
  var aIterable = a.values();
  var aResult;
  var bResult;
  while (aResult = aIterable.next()) {
    if (aResult.done) {
      break;
    }
    var bIterable = b.values();
    var hasMatch = false;
    var matchIndex = 0;
    while (bResult = bIterable.next()) {
      if (bResult.done) {
        break;
      }
      if (!matchedIndices[matchIndex] && state.equals(aResult.value, bResult.value, aResult.value, bResult.value, a, b, state)) {
        hasMatch = matchedIndices[matchIndex] = true;
        break;
      }
      matchIndex++;
    }
    if (!hasMatch) {
      return false;
    }
  }
  return true;
}
function areTypedArraysEqual(a, b) {
  var index3 = a.length;
  if (b.length !== index3) {
    return false;
  }
  while (index3-- > 0) {
    if (a[index3] !== b[index3]) {
      return false;
    }
  }
  return true;
}
function areUrlsEqual(a, b) {
  return a.hostname === b.hostname && a.pathname === b.pathname && a.protocol === b.protocol && a.port === b.port && a.hash === b.hash && a.username === b.username && a.password === b.password;
}
function isPropertyEqual(a, b, state, property) {
  if ((property === REACT_OWNER || property === PREACT_OWNER || property === PREACT_VNODE) && (a.$$typeof || b.$$typeof)) {
    return true;
  }
  return hasOwn(b, property) && state.equals(a[property], b[property], property, property, a, b, state);
}
var ARGUMENTS_TAG = "[object Arguments]";
var BOOLEAN_TAG = "[object Boolean]";
var DATE_TAG = "[object Date]";
var ERROR_TAG = "[object Error]";
var MAP_TAG = "[object Map]";
var NUMBER_TAG = "[object Number]";
var OBJECT_TAG = "[object Object]";
var REG_EXP_TAG = "[object RegExp]";
var SET_TAG = "[object Set]";
var STRING_TAG = "[object String]";
var URL_TAG = "[object URL]";
var isArray3 = Array.isArray;
var isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null;
var assign2 = Object.assign;
var getTag2 = Object.prototype.toString.call.bind(Object.prototype.toString);
function createEqualityComparator(_a2) {
  var areArraysEqual2 = _a2.areArraysEqual, areDatesEqual2 = _a2.areDatesEqual, areErrorsEqual2 = _a2.areErrorsEqual, areFunctionsEqual2 = _a2.areFunctionsEqual, areMapsEqual2 = _a2.areMapsEqual, areNumbersEqual2 = _a2.areNumbersEqual, areObjectsEqual2 = _a2.areObjectsEqual, arePrimitiveWrappersEqual2 = _a2.arePrimitiveWrappersEqual, areRegExpsEqual2 = _a2.areRegExpsEqual, areSetsEqual2 = _a2.areSetsEqual, areTypedArraysEqual2 = _a2.areTypedArraysEqual, areUrlsEqual2 = _a2.areUrlsEqual;
  return function comparator(a, b, state) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    var type = typeof a;
    if (type !== typeof b) {
      return false;
    }
    if (type !== "object") {
      if (type === "number") {
        return areNumbersEqual2(a, b, state);
      }
      if (type === "function") {
        return areFunctionsEqual2(a, b, state);
      }
      return false;
    }
    var constructor = a.constructor;
    if (constructor !== b.constructor) {
      return false;
    }
    if (constructor === Object) {
      return areObjectsEqual2(a, b, state);
    }
    if (isArray3(a)) {
      return areArraysEqual2(a, b, state);
    }
    if (isTypedArray != null && isTypedArray(a)) {
      return areTypedArraysEqual2(a, b, state);
    }
    if (constructor === Date) {
      return areDatesEqual2(a, b, state);
    }
    if (constructor === RegExp) {
      return areRegExpsEqual2(a, b, state);
    }
    if (constructor === Map) {
      return areMapsEqual2(a, b, state);
    }
    if (constructor === Set) {
      return areSetsEqual2(a, b, state);
    }
    var tag = getTag2(a);
    if (tag === DATE_TAG) {
      return areDatesEqual2(a, b, state);
    }
    if (tag === REG_EXP_TAG) {
      return areRegExpsEqual2(a, b, state);
    }
    if (tag === MAP_TAG) {
      return areMapsEqual2(a, b, state);
    }
    if (tag === SET_TAG) {
      return areSetsEqual2(a, b, state);
    }
    if (tag === OBJECT_TAG) {
      return typeof a.then !== "function" && typeof b.then !== "function" && areObjectsEqual2(a, b, state);
    }
    if (tag === URL_TAG) {
      return areUrlsEqual2(a, b, state);
    }
    if (tag === ERROR_TAG) {
      return areErrorsEqual2(a, b, state);
    }
    if (tag === ARGUMENTS_TAG) {
      return areObjectsEqual2(a, b, state);
    }
    if (tag === BOOLEAN_TAG || tag === NUMBER_TAG || tag === STRING_TAG) {
      return arePrimitiveWrappersEqual2(a, b, state);
    }
    return false;
  };
}
function createEqualityComparatorConfig(_a2) {
  var circular = _a2.circular, createCustomConfig = _a2.createCustomConfig, strict = _a2.strict;
  var config = {
    areArraysEqual: strict ? areObjectsEqualStrict : areArraysEqual,
    areDatesEqual,
    areErrorsEqual,
    areFunctionsEqual,
    areMapsEqual: strict ? combineComparators(areMapsEqual, areObjectsEqualStrict) : areMapsEqual,
    areNumbersEqual,
    areObjectsEqual: strict ? areObjectsEqualStrict : areObjectsEqual,
    arePrimitiveWrappersEqual,
    areRegExpsEqual,
    areSetsEqual: strict ? combineComparators(areSetsEqual, areObjectsEqualStrict) : areSetsEqual,
    areTypedArraysEqual: strict ? areObjectsEqualStrict : areTypedArraysEqual,
    areUrlsEqual
  };
  if (createCustomConfig) {
    config = assign2({}, config, createCustomConfig(config));
  }
  if (circular) {
    var areArraysEqual$1 = createIsCircular(config.areArraysEqual);
    var areMapsEqual$1 = createIsCircular(config.areMapsEqual);
    var areObjectsEqual$1 = createIsCircular(config.areObjectsEqual);
    var areSetsEqual$1 = createIsCircular(config.areSetsEqual);
    config = assign2({}, config, {
      areArraysEqual: areArraysEqual$1,
      areMapsEqual: areMapsEqual$1,
      areObjectsEqual: areObjectsEqual$1,
      areSetsEqual: areSetsEqual$1
    });
  }
  return config;
}
function createInternalEqualityComparator(compare) {
  return function(a, b, _indexOrKeyA, _indexOrKeyB, _parentA, _parentB, state) {
    return compare(a, b, state);
  };
}
function createIsEqual(_a2) {
  var circular = _a2.circular, comparator = _a2.comparator, createState = _a2.createState, equals = _a2.equals, strict = _a2.strict;
  if (createState) {
    return function isEqual2(a, b) {
      var _a3 = createState(), _b = _a3.cache, cache = _b === void 0 ? circular ? /* @__PURE__ */ new WeakMap() : void 0 : _b, meta = _a3.meta;
      return comparator(a, b, {
        cache,
        equals,
        meta,
        strict
      });
    };
  }
  if (circular) {
    return function isEqual2(a, b) {
      return comparator(a, b, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals,
        meta: void 0,
        strict
      });
    };
  }
  var state = {
    cache: void 0,
    equals,
    meta: void 0,
    strict
  };
  return function isEqual2(a, b) {
    return comparator(a, b, state);
  };
}
var deepEqual = createCustomEqual();
var strictDeepEqual = createCustomEqual({ strict: true });
var circularDeepEqual = createCustomEqual({ circular: true });
var strictCircularDeepEqual = createCustomEqual({
  circular: true,
  strict: true
});
var shallowEqual = createCustomEqual({
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
var strictShallowEqual = createCustomEqual({
  strict: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
var circularShallowEqual = createCustomEqual({
  circular: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
var strictCircularShallowEqual = createCustomEqual({
  circular: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  },
  strict: true
});
function createCustomEqual(options) {
  if (options === void 0) {
    options = {};
  }
  var _a2 = options.circular, circular = _a2 === void 0 ? false : _a2, createCustomInternalComparator = options.createInternalComparator, createState = options.createState, _b = options.strict, strict = _b === void 0 ? false : _b;
  var config = createEqualityComparatorConfig(options);
  var comparator = createEqualityComparator(config);
  var equals = createCustomInternalComparator ? createCustomInternalComparator(comparator) : createInternalEqualityComparator(comparator);
  return createIsEqual({ circular, comparator, createState, equals, strict });
}

// node_modules/@morev/utils/dist/chunk-FKKK4IRM.js
var UPPERCASE = new RegExp("\\p{Lu}", "u");
var LOWERCASE = new RegExp("\\p{Ll}", "u");
var LEADING_CAPITAL = new RegExp("^\\p{Lu}(?!\\p{Lu})", "gu");
var IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
var SEPARATORS = /[ \-._]+/;
var LEADING_SEPARATORS = new RegExp(`^${SEPARATORS.source}`);
var SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, "gu");
var NUMBERS_AND_IDENTIFIER = new RegExp(`\\d+${IDENTIFIER.source}`, "gu");

// node_modules/@morev/vue-transitions/dist/vue-transitions.js
var validateEnterLeave = (value, validator) => {
  if (validator(value))
    return true;
  if (!isObject(value))
    return false;
  if (Object.keys(value).length !== 2)
    return false;
  return !Object.entries(value).some(([key, val]) => {
    const wrongKey = !["enter", "leave"].includes(key);
    const wrongValue = !validator(val);
    return wrongKey || wrongValue;
  });
};
var validateDuration = (value) => validateEnterLeave(value, (val) => {
  return isInteger(val) && val >= 0;
});
var validateEasing = (value) => validateEnterLeave(value, (val) => {
  return isString(val) && val.trim() !== "";
});
var validateDelay = (value) => validateEnterLeave(value, (val) => {
  return isInteger(val) && val >= 0;
});
var transitionDuration = 300;
var transitionEasing = "cubic-bezier(.25, .8, .5, 1)";
var transitionDelay = 0;
var expandAxis = "y";
var slideOffset = [0, -16];
var scaleAxis = "both";
var scaleOrigin = "50% 50%";
var scaleValue = 0;
var moveDuration = transitionDuration;
var baseTransition = {
  inheritAttrs: false,
  props: {
    duration: {
      validator: validateDuration,
      default: transitionDuration
    },
    easing: {
      validator: validateEasing,
      default: () => transitionEasing
    },
    delay: {
      validator: validateDelay,
      default: transitionDelay
    },
    noOpacity: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: void 0
    },
    group: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "span"
    },
    noMove: {
      type: Boolean,
      default: false
    },
    moveDuration: {
      type: Number,
      default: moveDuration
    }
  },
  computed: {
    cComponent() {
      return this.group ? TransitionGroup : Transition;
    },
    cAttrs() {
      const { appear, mode, tag, duration } = this;
      return this.group ? { appear, tag, duration, ...this.$attrs } : { appear, mode, duration };
    },
    cHooks() {
      return {
        beforeEnter: (...args) => {
          this.reduceTransition(...args);
          this.$emit("before-enter", ...args);
        },
        beforeLeave: (...args) => {
          var _a2;
          this.reduceTransition(...args);
          (_a2 = this.initLeaving) == null ? void 0 : _a2.call(this, ...args);
          this.$emit("before-leave", ...args);
        },
        enter: (...args) => {
          var _a2;
          (_a2 = this.onEnter) == null ? void 0 : _a2.call(this, ...args);
          this.$emit("enter", ...args);
        },
        leave: (...args) => {
          var _a2;
          (_a2 = this.onLeave) == null ? void 0 : _a2.call(this, ...args);
          this.$emit("leave", ...args);
        },
        afterEnter: (...args) => {
          var _a2;
          this.resetTransition(...args);
          (_a2 = this.resetElement) == null ? void 0 : _a2.call(this, ...args);
          this.$emit("after-enter", ...args);
        },
        afterLeave: (...args) => {
          var _a2;
          this.resetTransition(...args);
          (_a2 = this.resetElement) == null ? void 0 : _a2.call(this, ...args);
          this.$emit("after-leave", ...args);
        }
      };
    }
  },
  methods: {
    setupTransition(element, event = "enter") {
      var _a2, _b, _c;
      const duration = ((_a2 = this.duration) == null ? void 0 : _a2[event]) ?? this.duration;
      const easing = ((_b = this.easing) == null ? void 0 : _b[event]) ?? this.easing;
      const delay = ((_c = this.delay) == null ? void 0 : _c[event]) ?? this.delay;
      element.style.setProperty("transition-duration", `${duration}ms`, "important");
      element.style.setProperty("transition-timing-function", `${easing}`, "important");
      element.style.setProperty("transition-delay", `${delay}ms`, "important");
    },
    reduceTransition(element) {
      element.style.setProperty("transition-duration", "0ms", "important");
      element.style.setProperty("transition-delay", "0ms", "important");
    },
    resetTransition(element) {
      element.style.removeProperty("transition-duration");
      element.style.removeProperty("transition-timing-function");
      element.style.removeProperty("transition-delay");
    },
    initLeaving(element) {
      if (!this.group || this.noMove)
        return element;
      const styles = getComputedStyle(element);
      const { width, height } = styles;
      const { marginLeft, marginTop } = styles;
      element.style.setProperty("left", `${element.offsetLeft - parseFloat(marginLeft)}px`, "important");
      element.style.setProperty("top", `${element.offsetTop - parseFloat(marginTop)}px`, "important");
      element.style.setProperty("width", `${parseFloat(width)}px`, "important");
      element.style.setProperty("height", `${parseFloat(height)}px`, "important");
      element.style.setProperty("position", "absolute", "important");
      return element;
    },
    setMoveDuration() {
      var _a2;
      if (this.group && this.$el) {
        (_a2 = this.$el.style) == null ? void 0 : _a2.setProperty("--move-duration", `${this.moveDuration}ms`);
      }
    }
  },
  watch: {
    moveDuration() {
      this.setMoveDuration();
    },
    group() {
      this.setMoveDuration();
    }
  },
  mounted() {
    this.setMoveDuration();
  }
};
var validateExpandAxis = (value) => validateEnterLeave(value, (val) => {
  return isString(val) && ["x", "y"].includes(val);
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
var _sfc_main$3 = {
  name: "transition-expand",
  mixins: [
    baseTransition
  ],
  props: {
    axis: {
      validator: validateExpandAxis,
      default: expandAxis
    }
  },
  data: () => ({}),
  computed: {},
  methods: {
    async onEnter(element) {
      await this.$nextTick();
      await this.$nextTick();
      this.getSizes(element);
      this.collapseElement(element, "enter");
      element.offsetTop;
      this.setupTransition(element, "enter");
      this.expandElement(element, "enter");
    },
    onLeave(element) {
      this.getSizes(element);
      this.expandElement(element, "leave");
      element.offsetTop;
      this.setupTransition(element, "leave");
      this.collapseElement(element, "leave");
    },
    expandElement(element, event = "enter") {
      var _a2;
      const axis = ((_a2 = this.axis) == null ? void 0 : _a2[event]) ?? this.axis;
      const start = axis === "x" ? "left" : "top";
      const end = axis === "x" ? "right" : "bottom";
      const size = element.visual.size[axis];
      const margin = element.visual.margin[axis];
      const padding = element.visual.padding[axis];
      if (!this.noOpacity) {
        element.style.setProperty("opacity", element.visual.opacity);
      }
      delete element.visual;
      element.style.setProperty(axis === "x" ? "width" : "height", `${parseFloat(size)}px`);
      element.style.setProperty(`padding-${start}`, `${parseFloat(padding[0])}px`);
      element.style.setProperty(`padding-${end}`, `${parseFloat(padding[1])}px`);
      element.style.setProperty(`margin-${start}`, `${parseFloat(margin[0])}px`);
      element.style.setProperty(`margin-${end}`, `${parseFloat(margin[1])}px`);
    },
    collapseElement(element, event = "enter") {
      var _a2;
      const axis = ((_a2 = this.axis) == null ? void 0 : _a2[event]) ?? this.axis;
      const axisProp = axis === "x" ? "width" : "height";
      const start = axis === "x" ? "left" : "top";
      const end = axis === "x" ? "right" : "bottom";
      if (!this.noOpacity) {
        element.style.setProperty("opacity", 0);
      }
      element.style.setProperty(axisProp, "0px");
      element.style.setProperty(`padding-${start}`, "0px");
      element.style.setProperty(`padding-${end}`, "0px");
      element.style.setProperty(`margin-${start}`, "0px");
      element.style.setProperty(`margin-${end}`, "0px");
    },
    resetElement(element) {
      element.style.removeProperty("opacity");
      element.style.removeProperty("width");
      element.style.removeProperty("height");
      element.style.removeProperty("padding-top");
      element.style.removeProperty("padding-right");
      element.style.removeProperty("padding-bottom");
      element.style.removeProperty("padding-left");
      element.style.removeProperty("margin-top");
      element.style.removeProperty("margin-right");
      element.style.removeProperty("margin-bottom");
      element.style.removeProperty("margin-left");
    },
    getSizes(element) {
      const styles = getComputedStyle(element);
      const { opacity } = styles;
      const { width, height } = styles;
      const { paddingTop, paddingRight, paddingBottom, paddingLeft } = styles;
      const { marginTop, marginRight, marginBottom, marginLeft } = styles;
      element.visual = {
        opacity,
        size: { x: width, y: height },
        padding: { x: [paddingLeft, paddingRight], y: [paddingTop, paddingBottom] },
        margin: { x: [marginLeft, marginRight], y: [marginTop, marginBottom] }
      };
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.cComponent), mergeProps({ name: "expand" }, _ctx.cAttrs, toHandlers(_ctx.cHooks)), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var TransitionExpand = _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var _sfc_main$2 = {
  name: "transition-fade",
  mixins: [
    baseTransition
  ],
  props: {},
  data: () => ({}),
  computed: {},
  methods: {
    onEnter(element) {
      this.fadeElement(element, "enter");
      element.offsetTop;
      this.setupTransition(element, "enter");
      this.$nextTick(() => element.style.removeProperty("opacity"));
    },
    onLeave(element) {
      this.setupTransition(element, "leave");
      this.fadeElement(element, "leave");
    },
    fadeElement(element, event = "enter") {
      element.style.setProperty("opacity", 0);
    },
    resetElement(element) {
      element.style.removeProperty("opacity");
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.cComponent), mergeProps({ name: "fade" }, _ctx.cAttrs, toHandlers(_ctx.cHooks)), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var TransitionFade = _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var validateScaleAxis = (value) => validateEnterLeave(value, (val) => {
  return isString(val) && ["x", "y", "both"].includes(val);
});
var validateScaleOrigin = (value) => validateEnterLeave(value, (val) => {
  return isString(val) && val.trim() !== "";
});
var validateScaleValue = (value) => validateEnterLeave(value, (val) => {
  return isNumeric(val) && val >= 0 && val <= 1;
});
var getMatrix = (transform) => {
  const matrixType = transform.startsWith("matrix3d") ? "matrix3d" : "matrix";
  const matrix = matrixType === "matrix3d" ? transform.slice(9, -1).split(",").map(Number) : transform.startsWith("matrix") ? transform.slice(7, -1).split(",").map(Number) : [1, 0, 0, 1, 0, 0];
  return [matrixType, matrix];
};
var _sfc_main$1 = {
  name: "transition-scale",
  mixins: [
    baseTransition
  ],
  props: {
    axis: {
      validator: validateScaleAxis,
      default: scaleAxis
    },
    origin: {
      validator: validateScaleOrigin,
      default: scaleOrigin
    },
    scale: {
      validator: validateScaleValue,
      default: scaleValue
    }
  },
  data: () => ({}),
  computed: {},
  methods: {
    onEnter(element) {
      this.scaleElement(element, "enter");
      element.offsetTop;
      this.setupTransition(element, "enter");
      this.$nextTick(() => {
        element.style.removeProperty("opacity");
        element.style.removeProperty("transform");
      });
    },
    onLeave(element) {
      this.setupTransition(element, "leave");
      this.scaleElement(element, "leave");
    },
    scaleElement(element, event = "enter") {
      var _a2, _b, _c;
      const { transform } = getComputedStyle(element);
      const axis = ((_a2 = this.axis) == null ? void 0 : _a2[event]) ?? this.axis;
      const origin = ((_b = this.origin) == null ? void 0 : _b[event]) ?? this.origin;
      const scale = clamp(1e-4, ((_c = this.scale) == null ? void 0 : _c[event]) ?? this.scale, 0.9999);
      const [matrixType, matrix] = getMatrix(transform);
      if (transform.startsWith("matrix3d")) {
        if (axis !== "y")
          matrix[0] = scale;
        if (axis !== "x")
          matrix[5] = scale;
      } else if (transform.startsWith("matrix")) {
        if (axis !== "y")
          matrix[0] = scale;
        if (axis !== "x")
          matrix[3] = scale;
      } else {
        matrix[0] = axis === "y" ? 1 : scale;
        matrix[3] = axis === "x" ? 1 : scale;
      }
      if (!this.noOpacity) {
        element.style.setProperty("opacity", 0);
      }
      element.style.setProperty("transform", `${matrixType}(${matrix})`);
      element.style.setProperty("transform-origin", `${origin}`);
    },
    resetElement(element) {
      element.style.removeProperty("opacity");
      element.style.removeProperty("transform");
      element.style.removeProperty("transform-origin");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.cComponent), mergeProps({ name: "scale" }, _ctx.cAttrs, toHandlers(_ctx.cHooks)), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var TransitionScale = _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var validateSlideOffset = (value) => validateEnterLeave(value, (val) => {
  if (!isArray(val))
    return false;
  if (val.length !== 2)
    return false;
  return !val.some((v) => {
    if (isInteger(v))
      return false;
    if (isString(v)) {
      return isNaN(Number(v.endsWith("%") ? v.slice(0, -1) : v));
    }
    return true;
  });
});
var _sfc_main = {
  name: "transition-slide",
  mixins: [
    baseTransition
  ],
  props: {
    offset: {
      validator: validateSlideOffset,
      default: () => slideOffset
    }
  },
  data: () => ({}),
  computed: {},
  methods: {
    onEnter(element) {
      this.slideElement(element, "enter");
      element.offsetTop;
      this.setupTransition(element, "enter");
      element.style.removeProperty("opacity");
      element.style.removeProperty("transform");
    },
    onLeave(element) {
      this.setupTransition(element, "leave");
      this.slideElement(element, "leave");
    },
    slideElement(element, event = "enter") {
      var _a2;
      const { width, height, transform } = getComputedStyle(element);
      const offset = ((_a2 = this.offset) == null ? void 0 : _a2[event]) ?? this.offset;
      let [offsetX, offsetY] = offset;
      if (!isNumeric(offsetX)) {
        const val = offsetX.endsWith("%") ? parseFloat(width) * (parseFloat(offsetX.slice(0, -1)) || 0) / 100 : parseFloat(offsetX);
        offsetX = val;
      }
      if (!isNumeric(offsetY)) {
        const val = offsetY.endsWith("%") ? parseFloat(height) * (parseFloat(offsetY.slice(0, -1)) || 0) / 100 : parseFloat(offsetY);
        offsetY = val;
      }
      const [matrixType, matrix] = getMatrix(transform);
      if (transform.startsWith("matrix3d")) {
        matrix[12] += offsetX;
        matrix[13] += offsetY;
      } else if (transform.startsWith("matrix")) {
        matrix[4] += offsetX;
        matrix[5] += offsetY;
      } else {
        matrix[4] = offsetX;
        matrix[5] = offsetY;
      }
      if (!this.noOpacity) {
        element.style.setProperty("opacity", 0);
      }
      element.style.setProperty("transform", `${matrixType}(${matrix})`);
    },
    resetElement(element) {
      element.style.removeProperty("opacity");
      element.style.removeProperty("transform");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.cComponent), mergeProps({ name: "slide" }, _ctx.cAttrs, toHandlers(_ctx.cHooks)), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var TransitionSlide = _export_sfc(_sfc_main, [["render", _sfc_render]]);
var components = { TransitionExpand, TransitionFade, TransitionScale, TransitionSlide };
var setProp = (component, prop, value) => {
  component.props ?? (component.props = {});
  component.props[prop] = {
    default: isArray(value) || isObject(value) ? () => value : value
  };
};
var getComponentDeclaration = (name, options) => {
  var _a2;
  const defaultProps = (options == null ? void 0 : options.defaultProps) ?? {};
  const componentProps = ((_a2 = options == null ? void 0 : options.componentDefaultProps) == null ? void 0 : _a2[name]) ?? {};
  Object.entries(defaultProps).forEach(([prop, propValue]) => {
    setProp(components[name], prop, propValue);
  });
  Object.entries(componentProps).forEach(([prop, propValue]) => {
    setProp(components[name], prop, propValue);
  });
  return components[name];
};
var install = function(Vue, options = {}) {
  Object.keys(components).forEach((name) => {
    Vue.component(name, getComponentDeclaration(name, options));
  });
};
var plugin = (pluginOptions) => ({
  install(Vue, options) {
    install(Vue, pluginOptions);
  }
});
var index2 = { install };
export {
  TransitionExpand,
  TransitionFade,
  TransitionScale,
  TransitionSlide,
  index2 as default,
  plugin
};
//# sourceMappingURL=@morev_vue-transitions.js.map
