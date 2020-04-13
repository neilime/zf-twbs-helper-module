# TwbsHelper\Form\View\Helper\Factory\FormCollectionFactory  



## Implements:
Laminas\ServiceManager\FactoryInterface, Laminas\ServiceManager\Factory\FactoryInterface



## Methods

| Name | Description |
|------|-------------|
|[__invoke](#formcollectionfactory__invoke)|Compatibility with Laminas and ZF3|
|[createService](#formcollectionfactorycreateservice)|Compatibility with ZF2 (>= 2.2) -> proxy to __invoke|




### FormCollectionFactory::__invoke  

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

`\TwbsHelper\Form\View\Helper\FormCollection`




<hr />


### FormCollectionFactory::createService  

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

`\TwbsHelper\Form\View\Helper\FormCollection`




<hr />

