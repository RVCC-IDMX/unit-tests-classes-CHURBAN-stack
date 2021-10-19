/* eslint-disable no-unused-vars */
const { Thermometer } = require('../src/thermometer');

test('Thermometer celsius getter & setter', () => {
  const t0 = new Thermometer(0);
  expect(t0.celsius).toBe(0);
  t0.celsius = 10;
  expect(t0.celsius).toBe(10);
});

test('Thermometer kelvin getter & setter', () => {
  const thermometer = new Thermometer(0);
  thermometer.kelvin = 0;
  expect(thermometer.kelvin).toBe(0);
  expect(thermometer.celsius).toBeCloseTo(-273.15);
});

test('Thermometer fahrenheit getter & setter', () => {
  const thermometer = new Thermometer(0);
  thermometer.fahrenheit = 212;
  expect(thermometer.fahrenheit).toBe(212);
  expect(thermometer.celsius).toBeCloseTo(100, 2);
});

test('Thermometer constructor & getters', () => {
  const t0 = new Thermometer(0);
  expect(t0.celsius).toBe(0);
  expect(t0.fahrenheit).toBe(32);
  expect(t0.kelvin).toBeCloseTo(273.15, 2);
  //
  const t1 = new Thermometer(100);
  expect(t1.celsius).toBe(100);
  expect(t1.fahrenheit).toBe(212);
  expect(t1.kelvin).toBeCloseTo(373.15);
});

test('Thermometer setters', () => {
  const t0 = new Thermometer(0);
  t0.celsius = 100;
  expect(t0.celsius).toBe(100);
  expect(t0.fahrenheit).toBe(212);
  expect(t0.kelvin).toBeCloseTo(373.15, 2);
  //
  const t1 = new Thermometer(100);
  t1.fahrenheit = 0;
  expect(t1.celsius).toBeCloseTo(-17.7778, 4);
  expect(t1.fahrenheit).toBe(0);
  expect(t1.kelvin).toBeCloseTo(255.3722, 4);
  //
  const t2 = new Thermometer(100);
  t2.kelvin = 0;
  expect(t2.celsius).toBeCloseTo(-273.15, 2);
  expect(t2.fahrenheit).toBeCloseTo(-459.67, 2);
  expect(t2.kelvin).toBe(0);
});

test('Thermometer toString', () => {
  const t0 = new Thermometer(0);
  expect(t0.toString()).toBe('0°C');
  expect(t0.toString('C')).toBe('0°C');
  //
  const t1 = new Thermometer(100);
  expect(t1.toString('C')).toBe('100°C');
  //
  const t2 = new Thermometer(100);
  expect(t2.toString('F')).toBe('212°F');
  //
  const t3 = new Thermometer(100);
  expect(t3.toString('K')).toBe('373.15K');
});
