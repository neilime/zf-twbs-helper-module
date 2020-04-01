# TwbsHelper\Form\View\Helper\Factory\FormElementFactory  

Factory to inject the ModuleOptions hard dependency

## Implements:
Laminas\ServiceManager\FactoryInterface, Laminas\ServiceManager\Factory\FactoryInterface



## Methods

| Name | Description |
|------|-------------|
|[__invoke](#formelementfactory__invoke)|Compatibility with Laminas and ZF3|
|[createService](#formelementfactorycreateservice)|Compatibility with ZF2 (>= 2.2) -> proxy to __invoke|




### FormElementFactory::__invoke  

**Description**

```php
public __invoke (\Interop\Container\ContainerInterface $oContainer, mixed $sRequestedName, array $aOptions)
```

Compatibility with Laminas and ZF3 

 

**Parameters**

* `(\Interop\Container\ContainerInterface) $oContainer`
* `(mixed) $sRequestedName`
* `(array) $aOptions`

**Return Values**

`void`




<hr />


### FormElementFactory::createService  

**Description**

```php
public createService (\Laminas\ServiceManager\ServiceLocatorInterface $oServiceLocator, mixed $sCanonicalName, mixed $sRequestedName)
```

Compatibility with ZF2 (>= 2.2) -> proxy to __invoke 

 

**Parameters**

* `(\Laminas\ServiceManager\ServiceLocatorInterface) $oServiceLocator`
* `(mixed) $sCanonicalName`
* `(mixed) $sRequestedName`

**Return Values**

`void`




<hr />

