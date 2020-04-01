# TestSuite\TwbsHelper\Form\View\Helper\FormCollectionTest  



## Implements:
Countable, PHPUnit\Framework\Test, PHPUnit\Framework\SelfDescribing

## Extend:

PHPUnit\Framework\TestCase

## Methods

| Name | Description |
|------|-------------|
|[setUp](#formcollectiontestsetup)||
|[testRenderTemplateWithInlineLayout](#formcollectiontesttestrendertemplatewithinlinelayout)||
|[testRenderWithInlineLayoutAddFormInlineClass](#formcollectiontesttestrenderwithinlinelayoutaddforminlineclass)||

## Inherited methods

| Name | Description |
|------|-------------|
| [__construct](https://secure.php.net/manual/en/phpunit\framework\testcase.__construct.php) | - |
| [addToAssertionCount](https://secure.php.net/manual/en/phpunit\framework\testcase.addtoassertioncount.php) | - |
| [addWarning](https://secure.php.net/manual/en/phpunit\framework\testcase.addwarning.php) | - |
|any|Returns a matcher that matches when the method is executed
zero or more times.|
| [anything](https://secure.php.net/manual/en/phpunit\framework\assert.anything.php) | - |
| [arrayHasKey](https://secure.php.net/manual/en/phpunit\framework\assert.arrayhaskey.php) | - |
|assertArrayHasKey|Asserts that an array has a specified key.|
|assertArrayNotHasKey|Asserts that an array does not have a specified key.|
|assertArraySubset|Asserts that an array has a specified subset.|
|assertAttributeContains|Asserts that a haystack that is stored in a static attribute of a class
or an attribute of an object contains a needle.|
|assertAttributeContainsOnly|Asserts that a haystack that is stored in a static attribute of a class
or an attribute of an object contains only values of a given type.|
|assertAttributeCount|Asserts the number of elements of an array, Countable or Traversable
that is stored in an attribute.|
|assertAttributeEmpty|Asserts that a static attribute of a class or an attribute of an object
is empty.|
|assertAttributeEquals|Asserts that a variable is equal to an attribute of an object.|
|assertAttributeGreaterThan|Asserts that an attribute is greater than another value.|
|assertAttributeGreaterThanOrEqual|Asserts that an attribute is greater than or equal to another value.|
|assertAttributeInstanceOf|Asserts that an attribute is of a given type.|
|assertAttributeInternalType|Asserts that an attribute is of a given type.|
|assertAttributeLessThan|Asserts that an attribute is smaller than another value.|
|assertAttributeLessThanOrEqual|Asserts that an attribute is smaller than or equal to another value.|
|assertAttributeNotContains|Asserts that a haystack that is stored in a static attribute of a class
or an attribute of an object does not contain a needle.|
|assertAttributeNotContainsOnly|Asserts that a haystack that is stored in a static attribute of a class
or an attribute of an object does not contain only values of a given
type.|
|assertAttributeNotCount|Asserts the number of elements of an array, Countable or Traversable
that is stored in an attribute.|
|assertAttributeNotEmpty|Asserts that a static attribute of a class or an attribute of an object
is not empty.|
|assertAttributeNotEquals|Asserts that a variable is not equal to an attribute of an object.|
|assertAttributeNotInstanceOf|Asserts that an attribute is of a given type.|
|assertAttributeNotInternalType|Asserts that an attribute is of a given type.|
|assertAttributeNotSame|Asserts that a variable and an attribute of an object do not have the
same type and value.|
|assertAttributeSame|Asserts that a variable and an attribute of an object have the same type
and value.|
|assertClassHasAttribute|Asserts that a class has a specified attribute.|
|assertClassHasStaticAttribute|Asserts that a class has a specified static attribute.|
|assertClassNotHasAttribute|Asserts that a class does not have a specified attribute.|
|assertClassNotHasStaticAttribute|Asserts that a class does not have a specified static attribute.|
|assertContains|Asserts that a haystack contains a needle.|
| [assertContainsEquals](https://secure.php.net/manual/en/phpunit\framework\assert.assertcontainsequals.php) | - |
|assertContainsOnly|Asserts that a haystack contains only values of a given type.|
|assertContainsOnlyInstancesOf|Asserts that a haystack contains only instances of a given class name.|
|assertCount|Asserts the number of elements of an array, Countable or Traversable.|
|assertDirectoryExists|Asserts that a directory exists.|
|assertDirectoryIsReadable|Asserts that a directory exists and is readable.|
|assertDirectoryIsWritable|Asserts that a directory exists and is writable.|
|assertDirectoryNotExists|Asserts that a directory does not exist.|
|assertDirectoryNotIsReadable|Asserts that a directory exists and is not readable.|
|assertDirectoryNotIsWritable|Asserts that a directory exists and is not writable.|
|assertEmpty|Asserts that a variable is empty.|
|assertEqualXMLStructure|Asserts that a hierarchy of DOMElements matches.|
|assertEquals|Asserts that two variables are equal.|
|assertEqualsCanonicalizing|Asserts that two variables are equal (canonicalizing).|
|assertEqualsIgnoringCase|Asserts that two variables are equal (ignoring case).|
|assertEqualsWithDelta|Asserts that two variables are equal (with delta).|
|assertFalse|Asserts that a condition is false.|
|assertFileEquals|Asserts that the contents of one file is equal to the contents of another
file.|
|assertFileEqualsCanonicalizing|Asserts that the contents of one file is equal to the contents of another
file (canonicalizing).|
|assertFileEqualsIgnoringCase|Asserts that the contents of one file is equal to the contents of another
file (ignoring case).|
|assertFileExists|Asserts that a file exists.|
|assertFileIsReadable|Asserts that a file exists and is readable.|
|assertFileIsWritable|Asserts that a file exists and is writable.|
|assertFileNotEquals|Asserts that the contents of one file is not equal to the contents of
another file.|
|assertFileNotEqualsCanonicalizing|Asserts that the contents of one file is not equal to the contents of another
file (canonicalizing).|
|assertFileNotEqualsIgnoringCase|Asserts that the contents of one file is not equal to the contents of another
file (ignoring case).|
|assertFileNotExists|Asserts that a file does not exist.|
|assertFileNotIsReadable|Asserts that a file exists and is not readable.|
|assertFileNotIsWritable|Asserts that a file exists and is not writable.|
|assertFinite|Asserts that a variable is finite.|
|assertGreaterThan|Asserts that a value is greater than another value.|
|assertGreaterThanOrEqual|Asserts that a value is greater than or equal to another value.|
|assertInfinite|Asserts that a variable is infinite.|
|assertInstanceOf|Asserts that a variable is of a given type.|
|assertInternalType|Asserts that a variable is of a given type.|
|assertIsArray|Asserts that a variable is of type array.|
|assertIsBool|Asserts that a variable is of type bool.|
|assertIsCallable|Asserts that a variable is of type callable.|
|assertIsFloat|Asserts that a variable is of type float.|
|assertIsInt|Asserts that a variable is of type int.|
|assertIsIterable|Asserts that a variable is of type iterable.|
|assertIsNotArray|Asserts that a variable is not of type array.|
|assertIsNotBool|Asserts that a variable is not of type bool.|
|assertIsNotCallable|Asserts that a variable is not of type callable.|
|assertIsNotFloat|Asserts that a variable is not of type float.|
|assertIsNotInt|Asserts that a variable is not of type int.|
|assertIsNotIterable|Asserts that a variable is not of type iterable.|
|assertIsNotNumeric|Asserts that a variable is not of type numeric.|
|assertIsNotObject|Asserts that a variable is not of type object.|
|assertIsNotResource|Asserts that a variable is not of type resource.|
|assertIsNotScalar|Asserts that a variable is not of type scalar.|
|assertIsNotString|Asserts that a variable is not of type string.|
|assertIsNumeric|Asserts that a variable is of type numeric.|
|assertIsObject|Asserts that a variable is of type object.|
|assertIsReadable|Asserts that a file/dir is readable.|
|assertIsResource|Asserts that a variable is of type resource.|
|assertIsScalar|Asserts that a variable is of type scalar.|
|assertIsString|Asserts that a variable is of type string.|
|assertIsWritable|Asserts that a file/dir exists and is writable.|
|assertJson|Asserts that a string is a valid JSON string.|
|assertJsonFileEqualsJsonFile|Asserts that two JSON files are equal.|
|assertJsonFileNotEqualsJsonFile|Asserts that two JSON files are not equal.|
|assertJsonStringEqualsJsonFile|Asserts that the generated JSON encoded object and the content of the given file are equal.|
|assertJsonStringEqualsJsonString|Asserts that two given JSON encoded objects or arrays are equal.|
|assertJsonStringNotEqualsJsonFile|Asserts that the generated JSON encoded object and the content of the given file are not equal.|
|assertJsonStringNotEqualsJsonString|Asserts that two given JSON encoded objects or arrays are not equal.|
|assertLessThan|Asserts that a value is smaller than another value.|
|assertLessThanOrEqual|Asserts that a value is smaller than or equal to another value.|
|assertNan|Asserts that a variable is nan.|
|assertNotContains|Asserts that a haystack does not contain a needle.|
| [assertNotContainsEquals](https://secure.php.net/manual/en/phpunit\framework\assert.assertnotcontainsequals.php) | - |
|assertNotContainsOnly|Asserts that a haystack does not contain only values of a given type.|
|assertNotCount|Asserts the number of elements of an array, Countable or Traversable.|
|assertNotEmpty|Asserts that a variable is not empty.|
|assertNotEquals|Asserts that two variables are not equal.|
|assertNotEqualsCanonicalizing|Asserts that two variables are not equal (canonicalizing).|
|assertNotEqualsIgnoringCase|Asserts that two variables are not equal (ignoring case).|
|assertNotEqualsWithDelta|Asserts that two variables are not equal (with delta).|
|assertNotFalse|Asserts that a condition is not false.|
|assertNotInstanceOf|Asserts that a variable is not of a given type.|
|assertNotInternalType|Asserts that a variable is not of a given type.|
|assertNotIsReadable|Asserts that a file/dir exists and is not readable.|
|assertNotIsWritable|Asserts that a file/dir exists and is not writable.|
|assertNotNull|Asserts that a variable is not null.|
|assertNotRegExp|Asserts that a string does not match a given regular expression.|
|assertNotSame|Asserts that two variables do not have the same type and value.|
|assertNotSameSize|Assert that the size of two arrays (or `Countable` or `Traversable` objects)
is not the same.|
|assertNotTrue|Asserts that a condition is not true.|
|assertNull|Asserts that a variable is null.|
|assertObjectHasAttribute|Asserts that an object has a specified attribute.|
|assertObjectNotHasAttribute|Asserts that an object does not have a specified attribute.|
|assertRegExp|Asserts that a string matches a given regular expression.|
|assertSame|Asserts that two variables have the same type and value.|
|assertSameSize|Assert that the size of two arrays (or `Countable` or `Traversable` objects)
is the same.|
| [assertStringContainsString](https://secure.php.net/manual/en/phpunit\framework\assert.assertstringcontainsstring.php) | - |
| [assertStringContainsStringIgnoringCase](https://secure.php.net/manual/en/phpunit\framework\assert.assertstringcontainsstringignoringcase.php) | - |
|assertStringEndsNotWith|Asserts that a string ends not with a given suffix.|
|assertStringEndsWith|Asserts that a string ends with a given suffix.|
|assertStringEqualsFile|Asserts that the contents of a string is equal
to the contents of a file.|
|assertStringEqualsFileCanonicalizing|Asserts that the contents of a string is equal
to the contents of a file (canonicalizing).|
|assertStringEqualsFileIgnoringCase|Asserts that the contents of a string is equal
to the contents of a file (ignoring case).|
|assertStringMatchesFormat|Asserts that a string matches a given format string.|
|assertStringMatchesFormatFile|Asserts that a string matches a given format file.|
| [assertStringNotContainsString](https://secure.php.net/manual/en/phpunit\framework\assert.assertstringnotcontainsstring.php) | - |
| [assertStringNotContainsStringIgnoringCase](https://secure.php.net/manual/en/phpunit\framework\assert.assertstringnotcontainsstringignoringcase.php) | - |
|assertStringNotEqualsFile|Asserts that the contents of a string is not equal
to the contents of a file.|
|assertStringNotEqualsFileCanonicalizing|Asserts that the contents of a string is not equal
to the contents of a file (canonicalizing).|
|assertStringNotEqualsFileIgnoringCase|Asserts that the contents of a string is not equal
to the contents of a file (ignoring case).|
|assertStringNotMatchesFormat|Asserts that a string does not match a given format string.|
|assertStringNotMatchesFormatFile|Asserts that a string does not match a given format string.|
|assertStringStartsNotWith|Asserts that a string starts not with a given prefix.|
|assertStringStartsWith|Asserts that a string starts with a given prefix.|
|assertThat|Evaluates a PHPUnit\Framework\Constraint matcher object.|
|assertTrue|Asserts that a condition is true.|
|assertXmlFileEqualsXmlFile|Asserts that two XML files are equal.|
|assertXmlFileNotEqualsXmlFile|Asserts that two XML files are not equal.|
|assertXmlStringEqualsXmlFile|Asserts that two XML documents are equal.|
|assertXmlStringEqualsXmlString|Asserts that two XML documents are equal.|
|assertXmlStringNotEqualsXmlFile|Asserts that two XML documents are not equal.|
|assertXmlStringNotEqualsXmlString|Asserts that two XML documents are not equal.|
|at|Returns a matcher that matches when the method is executed
at the given index.|
|atLeast|Returns a matcher that matches when the method is executed
at least N times.|
|atLeastOnce|Returns a matcher that matches when the method is executed at least once.|
|atMost|Returns a matcher that matches when the method is executed
at most N times.|
| [attribute](https://secure.php.net/manual/en/phpunit\framework\assert.attribute.php) | - |
| [attributeEqualTo](https://secure.php.net/manual/en/phpunit\framework\assert.attributeequalto.php) | - |
| [callback](https://secure.php.net/manual/en/phpunit\framework\assert.callback.php) | - |
| [classHasAttribute](https://secure.php.net/manual/en/phpunit\framework\assert.classhasattribute.php) | - |
| [classHasStaticAttribute](https://secure.php.net/manual/en/phpunit\framework\assert.classhasstaticattribute.php) | - |
| [contains](https://secure.php.net/manual/en/phpunit\framework\assert.contains.php) | - |
| [containsEqual](https://secure.php.net/manual/en/phpunit\framework\assert.containsequal.php) | - |
| [containsIdentical](https://secure.php.net/manual/en/phpunit\framework\assert.containsidentical.php) | - |
| [containsOnly](https://secure.php.net/manual/en/phpunit\framework\assert.containsonly.php) | - |
| [containsOnlyInstancesOf](https://secure.php.net/manual/en/phpunit\framework\assert.containsonlyinstancesof.php) | - |
| [count](https://secure.php.net/manual/en/phpunit\framework\testcase.count.php) | - |
| [countOf](https://secure.php.net/manual/en/phpunit\framework\assert.countof.php) | - |
| [dataDescription](https://secure.php.net/manual/en/phpunit\framework\testcase.datadescription.php) | - |
| [dataName](https://secure.php.net/manual/en/phpunit\framework\testcase.dataname.php) | - |
| [directoryExists](https://secure.php.net/manual/en/phpunit\framework\assert.directoryexists.php) | - |
| [doesNotPerformAssertions](https://secure.php.net/manual/en/phpunit\framework\testcase.doesnotperformassertions.php) | - |
| [doubledTypes](https://secure.php.net/manual/en/phpunit\framework\testcase.doubledtypes.php) | - |
| [equalTo](https://secure.php.net/manual/en/phpunit\framework\assert.equalto.php) | - |
|exactly|Returns a matcher that matches when the method is executed
exactly $count times.|
| [expectDeprecation](https://secure.php.net/manual/en/phpunit\framework\testcase.expectdeprecation.php) | - |
| [expectDeprecationMessage](https://secure.php.net/manual/en/phpunit\framework\testcase.expectdeprecationmessage.php) | - |
| [expectDeprecationMessageMatches](https://secure.php.net/manual/en/phpunit\framework\testcase.expectdeprecationmessagematches.php) | - |
| [expectError](https://secure.php.net/manual/en/phpunit\framework\testcase.expecterror.php) | - |
| [expectErrorMessage](https://secure.php.net/manual/en/phpunit\framework\testcase.expecterrormessage.php) | - |
| [expectErrorMessageMatches](https://secure.php.net/manual/en/phpunit\framework\testcase.expecterrormessagematches.php) | - |
| [expectException](https://secure.php.net/manual/en/phpunit\framework\testcase.expectexception.php) | - |
| [expectExceptionCode](https://secure.php.net/manual/en/phpunit\framework\testcase.expectexceptioncode.php) | - |
| [expectExceptionMessage](https://secure.php.net/manual/en/phpunit\framework\testcase.expectexceptionmessage.php) | - |
| [expectExceptionMessageMatches](https://secure.php.net/manual/en/phpunit\framework\testcase.expectexceptionmessagematches.php) | - |
| [expectExceptionMessageRegExp](https://secure.php.net/manual/en/phpunit\framework\testcase.expectexceptionmessageregexp.php) | - |
|expectExceptionObject|Sets up an expectation for an exception to be raised by the code under test.|
| [expectNotToPerformAssertions](https://secure.php.net/manual/en/phpunit\framework\testcase.expectnottoperformassertions.php) | - |
| [expectNotice](https://secure.php.net/manual/en/phpunit\framework\testcase.expectnotice.php) | - |
| [expectNoticeMessage](https://secure.php.net/manual/en/phpunit\framework\testcase.expectnoticemessage.php) | - |
| [expectNoticeMessageMatches](https://secure.php.net/manual/en/phpunit\framework\testcase.expectnoticemessagematches.php) | - |
| [expectOutputRegex](https://secure.php.net/manual/en/phpunit\framework\testcase.expectoutputregex.php) | - |
| [expectOutputString](https://secure.php.net/manual/en/phpunit\framework\testcase.expectoutputstring.php) | - |
| [expectWarning](https://secure.php.net/manual/en/phpunit\framework\testcase.expectwarning.php) | - |
| [expectWarningMessage](https://secure.php.net/manual/en/phpunit\framework\testcase.expectwarningmessage.php) | - |
| [expectWarningMessageMatches](https://secure.php.net/manual/en/phpunit\framework\testcase.expectwarningmessagematches.php) | - |
|fail|Fails a test with the given message.|
| [fileExists](https://secure.php.net/manual/en/phpunit\framework\assert.fileexists.php) | - |
| [getActualOutput](https://secure.php.net/manual/en/phpunit\framework\testcase.getactualoutput.php) | - |
| [getActualOutputForAssertion](https://secure.php.net/manual/en/phpunit\framework\testcase.getactualoutputforassertion.php) | - |
| [getAnnotations](https://secure.php.net/manual/en/phpunit\framework\testcase.getannotations.php) | - |
|getCount|Return the current assertion count.|
| [getDataSetAsString](https://secure.php.net/manual/en/phpunit\framework\testcase.getdatasetasstring.php) | - |
| [getDependencies](https://secure.php.net/manual/en/phpunit\framework\testcase.getdependencies.php) | - |
| [getDependencyInput](https://secure.php.net/manual/en/phpunit\framework\testcase.getdependencyinput.php) | - |
| [getExpectedException](https://secure.php.net/manual/en/phpunit\framework\testcase.getexpectedexception.php) | - |
| [getExpectedExceptionCode](https://secure.php.net/manual/en/phpunit\framework\testcase.getexpectedexceptioncode.php) | - |
| [getExpectedExceptionMessage](https://secure.php.net/manual/en/phpunit\framework\testcase.getexpectedexceptionmessage.php) | - |
| [getExpectedExceptionMessageRegExp](https://secure.php.net/manual/en/phpunit\framework\testcase.getexpectedexceptionmessageregexp.php) | - |
| [getGroups](https://secure.php.net/manual/en/phpunit\framework\testcase.getgroups.php) | - |
|getMockBuilder|Returns a builder object to create mock objects using a fluent interface.|
| [getName](https://secure.php.net/manual/en/phpunit\framework\testcase.getname.php) | - |
|getNumAssertions|Returns the number of assertions performed by this test.|
|getObjectAttribute|Returns the value of an object's attribute.|
|getProvidedData|Gets the data set of a TestCase.|
| [getResult](https://secure.php.net/manual/en/phpunit\framework\testcase.getresult.php) | - |
|getSize|Returns the size of the test.|
|getStaticAttribute|Returns the value of a static attribute.|
| [getStatus](https://secure.php.net/manual/en/phpunit\framework\testcase.getstatus.php) | - |
| [getStatusMessage](https://secure.php.net/manual/en/phpunit\framework\testcase.getstatusmessage.php) | - |
| [getTestResultObject](https://secure.php.net/manual/en/phpunit\framework\testcase.gettestresultobject.php) | - |
| [greaterThan](https://secure.php.net/manual/en/phpunit\framework\assert.greaterthan.php) | - |
| [greaterThanOrEqual](https://secure.php.net/manual/en/phpunit\framework\assert.greaterthanorequal.php) | - |
| [hasDependencies](https://secure.php.net/manual/en/phpunit\framework\testcase.hasdependencies.php) | - |
| [hasExpectationOnOutput](https://secure.php.net/manual/en/phpunit\framework\testcase.hasexpectationonoutput.php) | - |
| [hasFailed](https://secure.php.net/manual/en/phpunit\framework\testcase.hasfailed.php) | - |
| [hasOutput](https://secure.php.net/manual/en/phpunit\framework\testcase.hasoutput.php) | - |
| [hasSize](https://secure.php.net/manual/en/phpunit\framework\testcase.hassize.php) | - |
| [identicalTo](https://secure.php.net/manual/en/phpunit\framework\assert.identicalto.php) | - |
| [isEmpty](https://secure.php.net/manual/en/phpunit\framework\assert.isempty.php) | - |
| [isFalse](https://secure.php.net/manual/en/phpunit\framework\assert.isfalse.php) | - |
| [isFinite](https://secure.php.net/manual/en/phpunit\framework\assert.isfinite.php) | - |
| [isInIsolation](https://secure.php.net/manual/en/phpunit\framework\testcase.isinisolation.php) | - |
| [isInfinite](https://secure.php.net/manual/en/phpunit\framework\assert.isinfinite.php) | - |
| [isInstanceOf](https://secure.php.net/manual/en/phpunit\framework\assert.isinstanceof.php) | - |
| [isJson](https://secure.php.net/manual/en/phpunit\framework\assert.isjson.php) | - |
| [isLarge](https://secure.php.net/manual/en/phpunit\framework\testcase.islarge.php) | - |
| [isMedium](https://secure.php.net/manual/en/phpunit\framework\testcase.ismedium.php) | - |
| [isNan](https://secure.php.net/manual/en/phpunit\framework\assert.isnan.php) | - |
| [isNull](https://secure.php.net/manual/en/phpunit\framework\assert.isnull.php) | - |
| [isReadable](https://secure.php.net/manual/en/phpunit\framework\assert.isreadable.php) | - |
| [isSmall](https://secure.php.net/manual/en/phpunit\framework\testcase.issmall.php) | - |
| [isTrue](https://secure.php.net/manual/en/phpunit\framework\assert.istrue.php) | - |
| [isType](https://secure.php.net/manual/en/phpunit\framework\assert.istype.php) | - |
| [isWritable](https://secure.php.net/manual/en/phpunit\framework\assert.iswritable.php) | - |
| [lessThan](https://secure.php.net/manual/en/phpunit\framework\assert.lessthan.php) | - |
| [lessThanOrEqual](https://secure.php.net/manual/en/phpunit\framework\assert.lessthanorequal.php) | - |
| [logicalAnd](https://secure.php.net/manual/en/phpunit\framework\assert.logicaland.php) | - |
| [logicalNot](https://secure.php.net/manual/en/phpunit\framework\assert.logicalnot.php) | - |
| [logicalOr](https://secure.php.net/manual/en/phpunit\framework\assert.logicalor.php) | - |
| [logicalXor](https://secure.php.net/manual/en/phpunit\framework\assert.logicalxor.php) | - |
| [markAsRisky](https://secure.php.net/manual/en/phpunit\framework\testcase.markasrisky.php) | - |
|markTestIncomplete|Mark the test as incomplete.|
|markTestSkipped|Mark the test as skipped.|
| [matches](https://secure.php.net/manual/en/phpunit\framework\assert.matches.php) | - |
| [matchesRegularExpression](https://secure.php.net/manual/en/phpunit\framework\assert.matchesregularexpression.php) | - |
|never|Returns a matcher that matches when the method is never executed.|
| [objectHasAttribute](https://secure.php.net/manual/en/phpunit\framework\assert.objecthasattribute.php) | - |
| [onConsecutiveCalls](https://secure.php.net/manual/en/phpunit\framework\testcase.onconsecutivecalls.php) | - |
|once|Returns a matcher that matches when the method is executed exactly once.|
|readAttribute|Returns the value of an attribute of a class or an object.|
| [registerComparator](https://secure.php.net/manual/en/phpunit\framework\testcase.registercomparator.php) | - |
| [registerMockObject](https://secure.php.net/manual/en/phpunit\framework\testcase.registermockobject.php) | - |
|resetCount|Reset the assertion counter.|
| [returnArgument](https://secure.php.net/manual/en/phpunit\framework\testcase.returnargument.php) | - |
| [returnCallback](https://secure.php.net/manual/en/phpunit\framework\testcase.returncallback.php) | - |
|returnSelf|Returns the current object.|
| [returnValue](https://secure.php.net/manual/en/phpunit\framework\testcase.returnvalue.php) | - |
| [returnValueMap](https://secure.php.net/manual/en/phpunit\framework\testcase.returnvaluemap.php) | - |
|run|Runs the test case and collects the results in a TestResult object.|
| [runBare](https://secure.php.net/manual/en/phpunit\framework\testcase.runbare.php) | - |
| [setBackupGlobals](https://secure.php.net/manual/en/phpunit\framework\testcase.setbackupglobals.php) | - |
| [setBackupStaticAttributes](https://secure.php.net/manual/en/phpunit\framework\testcase.setbackupstaticattributes.php) | - |
| [setBeStrictAboutChangesToGlobalState](https://secure.php.net/manual/en/phpunit\framework\testcase.setbestrictaboutchangestoglobalstate.php) | - |
| [setDependencies](https://secure.php.net/manual/en/phpunit\framework\testcase.setdependencies.php) | - |
| [setDependencyInput](https://secure.php.net/manual/en/phpunit\framework\testcase.setdependencyinput.php) | - |
| [setGroups](https://secure.php.net/manual/en/phpunit\framework\testcase.setgroups.php) | - |
| [setInIsolation](https://secure.php.net/manual/en/phpunit\framework\testcase.setinisolation.php) | - |
| [setName](https://secure.php.net/manual/en/phpunit\framework\testcase.setname.php) | - |
| [setOutputCallback](https://secure.php.net/manual/en/phpunit\framework\testcase.setoutputcallback.php) | - |
| [setPreserveGlobalState](https://secure.php.net/manual/en/phpunit\framework\testcase.setpreserveglobalstate.php) | - |
| [setRegisterMockObjectsFromTestArgumentsRecursively](https://secure.php.net/manual/en/phpunit\framework\testcase.setregistermockobjectsfromtestargumentsrecursively.php) | - |
| [setResult](https://secure.php.net/manual/en/phpunit\framework\testcase.setresult.php) | - |
| [setRunClassInSeparateProcess](https://secure.php.net/manual/en/phpunit\framework\testcase.setrunclassinseparateprocess.php) | - |
| [setRunTestInSeparateProcess](https://secure.php.net/manual/en/phpunit\framework\testcase.setruntestinseparateprocess.php) | - |
| [setTestResultObject](https://secure.php.net/manual/en/phpunit\framework\testcase.settestresultobject.php) | - |
|setUpBeforeClass|This method is called before the first test of this test class is run.|
| [setUseErrorHandler](https://secure.php.net/manual/en/phpunit\framework\testcase.setuseerrorhandler.php) | - |
| [stringContains](https://secure.php.net/manual/en/phpunit\framework\assert.stringcontains.php) | - |
| [stringEndsWith](https://secure.php.net/manual/en/phpunit\framework\assert.stringendswith.php) | - |
| [stringStartsWith](https://secure.php.net/manual/en/phpunit\framework\assert.stringstartswith.php) | - |
|tearDownAfterClass|This method is called after the last test of this test class is run.|
| [throwException](https://secure.php.net/manual/en/phpunit\framework\testcase.throwexception.php) | - |
|toString|Returns a string representation of the test case.|
| [usesDataProvider](https://secure.php.net/manual/en/phpunit\framework\testcase.usesdataprovider.php) | - |



### FormCollectionTest::setUp  

**Description**

```php
 setUp (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### FormCollectionTest::testRenderTemplateWithInlineLayout  

**Description**

```php
 testRenderTemplateWithInlineLayout (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### FormCollectionTest::testRenderWithInlineLayoutAddFormInlineClass  

**Description**

```php
 testRenderWithInlineLayoutAddFormInlineClass (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />

