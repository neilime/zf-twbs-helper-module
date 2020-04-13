# TwbsHelper\Form\View\Helper\Factory\FormFactory  



## Implements:
Laminas\ServiceManager\FactoryInterface, Laminas\ServiceManager\Factory\FactoryInterface



## Methods

| Name | Description |
|------|-------------|
|[__invoke](#formfactory__invoke)|Compatibility with Laminas and ZF3|
|[createService](#formfactorycreateservice)|Compatibility with ZF2 (>= 2.2) -> proxy to __invoke|




### FormFactory::__invoke  

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

`\TwbsHelper\Form\View\Helper\Form`




<hr />


### FormFactory::createService  

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

`\TwbsHelper\Form\View\Helper\Form`




<hr />

