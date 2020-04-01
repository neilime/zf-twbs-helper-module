# Changelog

All notable changes to this project will be documented in this file, in reverse chronological order by release.

## 2.9.1 - 2019-08-21

### Added

- [zendframework/zend-navigation#77](https://github.com/zendframework/zend-navigation/pull/77) adds support for PHP 7.3.

### Changed

- Nothing.

### Deprecated

- Nothing.

### Removed

- Nothing.

### Fixed

- Nothing.

## 2.9.0 - 2018-04-25

### Added

- [zendframework/zend-navigation#67](https://github.com/zendframework/zend-navigation/pull/67) adds support for PHP 7.2.

### Changed

- Nothing.

### Deprecated

- Nothing.

### Removed

- [zendframework/zend-navigation#67](https://github.com/zendframework/zend-navigation/pull/67) removes support for HHVM.

- [zendframework/zend-navigation#59](https://github.com/zendframework/zend-navigation/pull/59) removes support for PHP 5.5.

### Fixed

- Nothing.

## 2.8.2 - 2017-03-22

### Added

- Nothing.

### Deprecated

- Nothing.

### Removed

- Nothing.

### Fixed

- [zendframework/zend-navigation#40](https://github.com/zendframework/zend-navigation/pull/40) fixes an
  incorrect exception thrown from `Laminas\Navigation\Page\Mvc`.

## 2.8.1 - 2016-06-12

### Added

- Nothing.

### Deprecated

- Nothing.

### Removed

- Nothing.

### Fixed

- [zendframework/zend-navigation#38](https://github.com/zendframework/zend-navigation/pull/38) fixes the
  `AbstractNavigationFactory` to allow either laminas-router or laminas-mvc v2
  `RouteMatch` or `RouteStackInterface` implementations when injecting pages
  with URIs.

## 2.8.0 - 2016-06-11

### Added

- [zendframework/zend-navigation#33](https://github.com/zendframework/zend-navigation/pull/33) adds support
  for laminas-mvc v3.0. Specifically, the `Mvc` page type now allows usage of
  either `Laminas\Mvc\Router` or `Laminas\Router` for URI generation.

### Deprecated

- Nothing.

### Removed

- Nothing.

### Fixed

- Nothing.

## 2.7.2 - 2016-06-11

### Added

- [zendframework/zend-navigation#27](https://github.com/zendframework/zend-navigation/pull/27) adds and
  publishes the documentation to https://docs.laminas.dev/laminas-navigation/

### Deprecated

- Nothing.

### Removed

- Nothing.

### Fixed

- [zendframework/zend-navigation#35](https://github.com/zendframework/zend-navigation/pull/35) fixes errors
  in the `ConfigProvider` that prevented its use.

## 2.7.1 - 2016-04-08

### Added

- Nothing.

### Deprecated

- Nothing.

### Removed

- Nothing.

### Fixed

- This release removes the erroneous calls to `getViewHelperConfig()` in the
  `ConfigProvider` and `Module` classes.

## 2.7.0 - 2016-04-08

### Added

- [zendframework/zend-navigation#26](https://github.com/zendframework/zend-navigation/pull/26) adds:
  - `Laminas\Navigation\View\ViewHelperManagerDelegatorFactory`, which decorates
    the `ViewHelperManager` service to configure it using
    `Laminas\Navigation\View\HelperConfig`.
  - `ConfigProvider`, which maps the default navigation factory and the
    navigation abstract factory, as well as the navigation view helper.
  - `Module`, which does the same as the above, but for laminas-mvc
    applications.

### Deprecated

- Nothing.

### Removed

- Nothing.

### Fixed

- Nothing.

## 2.6.1 - 2016-03-21

### Added

- Nothing.

### Deprecated

- Nothing.

### Removed

- Nothing.

### Fixed

- [zendframework/zend-navigation#25](https://github.com/zendframework/zend-navigation/pull/25) ups the
  minimum laminas-view version to 2.6.5, to bring in a fix for a circular
  dependency issue in the navigation helpers.

## 2.6.0 - 2016-02-24

### Added

- Nothing.

### Deprecated

- Nothing.

### Removed

- Nothing.

### Fixed

- [zendframework/zend-navigation#5](https://github.com/zendframework/zend-navigation/pull/5) and
  [zendframework/zend-navigation#20](https://github.com/zendframework/zend-navigation/pull/20) update the
  code to be forwards compatible with laminas-servicemanager v3.
