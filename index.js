/**
 * @fileoverview
 *
 * This package contains an array of timezones based on conventional options found online.
 * It does not follow any complete data set, but all names are according to the tz format:
 * https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.
 *
 * More specifically, the fields in the array are:
 * – offset, a string from '-11:00' to '+14:00' representing the UTC offset
 * - label, a readable label that contains the offset and a longer, descriptive name of the timezone
 * - tzCode, the value from the tz standard
 *
 * Install:
 *  `npm install compact-timezone-list --save`
 *   # or
 *  `yarn add compact-timezone-list`
 *
 *
 *  Example:
 *  import timezones from 'compact-timezone-list';
 *  // or
 *  import { minimalTimezoneSet } from 'compact-timezone-list';
 *
 *  Details:
 *  - The default export provides a long list of options, with multiple
 *  suggestions for each UTC offset.
 *  – The `minimalTimezoneSet` export provides one option per offset type, with
 *  a favourite chosen to represent each offset. This is mostly targeted to small,
 *  western-focused apps. But, every UTC offset is included.
 */

/**
 *
 * @type {Array.<{ offset: string, label: string, tzCode: string }>}
 */
export var minimalTimezoneSet = [
  { offset: '-11:00', label: '(GMT-11:00) Pago Pago', tzCode: 'Pacific/Pago_Pago' },
  { offset: '-10:00', label: '(GMT-10:00) Hawaii Time', tzCode: 'Pacific/Honolulu' },
  { offset: '-10:00', label: '(GMT-10:00) Tahiti', tzCode: 'Pacific/Tahiti' },
  { offset: '-09:00', label: '(GMT-09:00) Alaska Time', tzCode: 'America/Anchorage' },
  { offset: '-08:00', label: '(GMT-08:00) Pacific Time', tzCode: 'America/Los_Angeles' },
  { offset: '-07:00', label: '(GMT-07:00) Mountain Time', tzCode: 'America/Denver' },
  { offset: '-06:00', label: '(GMT-06:00) Central Time', tzCode: 'America/Chicago' },
  { offset: '-05:00', label: '(GMT-05:00) Eastern Time', tzCode: 'America/New_York' },
  { offset: '-04:00', label: '(GMT-04:00) Atlantic Time - Halifax', tzCode: 'America/Halifax' },
  { offset: '-03:00', label: '(GMT-03:00) Buenos Aires', tzCode: 'America/Argentina/Buenos_Aires' },
  { offset: '-02:00', label: '(GMT-02:00) Sao Paulo', tzCode: 'America/Sao_Paulo' },
  { offset: '-01:00', label: '(GMT-01:00) Azores', tzCode: 'Atlantic/Azores' },
  { offset: '+00:00', label: '(GMT+00:00) London', tzCode: 'Europe/London' },
  { offset: '+01:00', label: '(GMT+01:00) Berlin', tzCode: 'Europe/Berlin' },
  { offset: '+02:00', label: '(GMT+02:00) Helsinki', tzCode: 'Europe/Helsinki' },
  { offset: '+03:00', label: '(GMT+03:00) Istanbul', tzCode: 'Europe/Istanbul' },
  { offset: '+04:00', label: '(GMT+04:00) Dubai', tzCode: 'Asia/Dubai' },
  { offset: '+04:30', label: '(GMT+04:30) Kabul', tzCode: 'Asia/Kabul' },
  { offset: '+05:00', label: '(GMT+05:00) Maldives', tzCode: 'Indian/Maldives' },
  { offset: '+05:30', label: '(GMT+05:30) India Standard Time', tzCode: 'Asia/Calcutta' },
  { offset: '+05:45', label: '(GMT+05:45) Kathmandu', tzCode: 'Asia/Kathmandu' },
  { offset: '+06:00', label: '(GMT+06:00) Dhaka', tzCode: 'Asia/Dhaka' },
  { offset: '+06:30', label: '(GMT+06:30) Cocos', tzCode: 'Indian/Cocos' },
  { offset: '+07:00', label: '(GMT+07:00) Bangkok', tzCode: 'Asia/Bangkok' },
  { offset: '+08:00', label: '(GMT+08:00) Hong Kong', tzCode: 'Asia/Hong_Kong' },
  { offset: '+08:30', label: '(GMT+08:30) Pyongyang', tzCode: 'Asia/Pyongyang' },
  { offset: '+09:00', label: '(GMT+09:00) Tokyo', tzCode: 'Asia/Tokyo' },
  { offset: '+09:30', label: '(GMT+09:30) Central Time - Darwin', tzCode: 'Australia/Darwin' },
  { offset: '+10:00', label: '(GMT+10:00) Eastern Time - Brisbane', tzCode: 'Australia/Brisbane' },
  { offset: '+10:30', label: '(GMT+10:30) Central Time - Adelaide', tzCode: 'Australia/Adelaide' },
  { offset: '+11:00', label: '(GMT+11:00) Eastern Time - Melbourne, Sydney', tzCode: 'Australia/Sydney' },
  { offset: '+12:00', label: '(GMT+12:00) Nauru', tzCode: 'Pacific/Nauru' },
  { offset: '+13:00', label: '(GMT+13:00) Auckland', tzCode: 'Pacific/Auckland' },
  { offset: '+14:00', label: '(GMT+14:00) Kiritimati', tzCode: 'Pacific/Kiritimati' }
];
