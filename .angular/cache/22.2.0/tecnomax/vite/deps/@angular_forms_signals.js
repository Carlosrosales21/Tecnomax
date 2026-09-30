import { $l as Subscription, $n as Output, Ac as InjectionToken, Bt as computed, Ca as ɵɵclassProp, Dn as Host, El as signal, En as ElementRef, Fn as Injectable, Gl as createOperatorSubscriber, Gt as resource, Hl as map, I as debounced, In as Input, Kt as setInParamsFunction, L as declareExperimentalWebMcpTool, Ml as ɵɵdefineInjector, Mr as afterNextRender, O as booleanAttribute, Pn as Inject, Qn as Optional, Qo as ɵɵlistener, T as afterRenderEffect, Ut as isInParamsFunction, Wi as setClassMetadata, Wl as Subject, Wt as linkedSignal, X as input, Zc as Version, aa as ɵɵControlFeature, al as effect, ao as ɵɵdefineNgModule, bi as isSubscribable, ca as ɵɵInheritDefinitionFeature, co as ɵɵdirectiveInject, dr as Service, fc as _asyncToGenerator, fl as inject, fu as SIGNAL, gc as CSP_NONCE, io as ɵɵdefineDirective, ir as Renderer2, jc as Injector, jl as ɵɵdefineInjectable, jo as ɵɵgetInheritedFactory, la as ɵɵNgOnChangesFeature, mc as APP_ID, mu as _defineProperty, ol as formatRuntimeError, pr as SkipSelf, pu as _objectSpread2, qc as RuntimeError, ql as Observable, qn as NgModule, qt as untracked, r as ChangeDetectorRef, sl as forwardRef, so as ɵɵdefineService, tn as ApplicationRef, ua as ɵɵProvidersFeature, ur as Self, vc as DOCUMENT, vl as makeEnvironmentProviders, wc as EventEmitter, wl as runInInjectionContext, wn as Directive, ya as ɵɵattribute, yc as DestroyRef, yi as isPromise, zt as chain } from "./core-D_iDcTAO.js";
import { E as from, O as innerFrom, k as popResultSelector, t as httpResource, v as getDOM } from "./http-Cp8-cXSL.js";
import { n as argsArgArrayOrObject, r as mapOneOrManyArgs, t as createObject } from "./createObject-DtSnenCJ.js";
//#region node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js
function forkJoin() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	var resultSelector = popResultSelector(args);
	var _a = argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
	var result = new Observable(function(subscriber) {
		var length = sources.length;
		if (!length) {
			subscriber.complete();
			return;
		}
		var values = new Array(length);
		var remainingCompletions = length;
		var remainingEmissions = length;
		var _loop_1 = function(sourceIndex) {
			var hasValue = false;
			innerFrom(sources[sourceIndex]).subscribe(createOperatorSubscriber(subscriber, function(value) {
				if (!hasValue) {
					hasValue = true;
					remainingEmissions--;
				}
				values[sourceIndex] = value;
			}, function() {
				return remainingCompletions--;
			}, void 0, function() {
				if (!remainingCompletions || !hasValue) {
					if (!remainingEmissions) subscriber.next(keys ? createObject(keys, values) : values);
					subscriber.complete();
				}
			}));
		};
		for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) _loop_1(sourceIndex);
	});
	return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
}
//#endregion
//#region node_modules/@angular/forms/fesm2022/forms.mjs
/**
* @license Angular v22.2.0
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var _BaseControlValueAccessor;
var _BuiltInControlValueAccessor;
var _CheckboxControlValueAccessor;
var _DefaultValueAccessor;
var _AbstractValidatorDirective;
var _MaxValidator;
var _MinValidator;
var _RequiredValidator;
var _CheckboxRequiredValidator;
var _EmailValidator;
var _MinLengthValidator;
var _MaxLengthValidator;
var _PatternValidator;
var _NgControlStatus;
var _NgControlStatusGroup;
var _NgForm;
var _AbstractFormGroupDirective;
var _NgModelGroup;
var _AbstractFormDirective;
var _FormGroupDirective;
var _NgModel;
var _ɵNgNoValidate;
var _NumberValueAccessor;
var _RadioControlRegistry;
var _RadioControlValueAccessor;
var _RangeValueAccessor;
var _FormArrayDirective;
var _FormControlDirective;
var _FormGroupName;
var _FormArrayName;
var _FormControlName;
var _SelectControlValueAccessor;
var _NgSelectOption;
var _SelectMultipleControlValueAccessor;
var _ɵNgSelectMultipleOption;
var _ɵInternalFormsSharedModule;
var _FormBuilder;
var _NonNullableFormBuilder;
var _UntypedFormBuilder;
var _FormsModule;
var _ReactiveFormsModule;
var BaseControlValueAccessor = class {
	constructor(_renderer, _elementRef) {
		_defineProperty(this, "_renderer", void 0);
		_defineProperty(this, "_elementRef", void 0);
		_defineProperty(this, "onChange", (_) => {});
		_defineProperty(this, "onTouched", () => {});
		this._renderer = _renderer;
		this._elementRef = _elementRef;
	}
	setProperty(key, value) {
		this._renderer.setProperty(this._elementRef.nativeElement, key, value);
	}
	registerOnTouched(fn) {
		this.onTouched = fn;
	}
	registerOnChange(fn) {
		this.onChange = fn;
	}
	setDisabledState(isDisabled) {
		this.setProperty("disabled", isDisabled);
	}
};
_BaseControlValueAccessor = BaseControlValueAccessor;
_defineProperty(BaseControlValueAccessor, "ɵfac", function BaseControlValueAccessor_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _BaseControlValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
});
_defineProperty(BaseControlValueAccessor, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({ type: _BaseControlValueAccessor }));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{ type: Directive }], () => [{ type: Renderer2 }, { type: ElementRef }], null);
})();
var BuiltInControlValueAccessor = class extends BaseControlValueAccessor {};
_BuiltInControlValueAccessor = BuiltInControlValueAccessor;
_defineProperty(BuiltInControlValueAccessor, "ɵfac", /*@__PURE__*/ (() => {
	let ɵBuiltInControlValueAccessor_BaseFactory = void 0;
	return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
		return (ɵBuiltInControlValueAccessor_BaseFactory || (ɵBuiltInControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
	};
})());
_defineProperty(BuiltInControlValueAccessor, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _BuiltInControlValueAccessor,
	features: [ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{ type: Directive }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => CheckboxControlValueAccessor),
	multi: true
};
var CheckboxControlValueAccessor = class extends BuiltInControlValueAccessor {
	writeValue(value) {
		this.setProperty("checked", value);
	}
};
_CheckboxControlValueAccessor = CheckboxControlValueAccessor;
_defineProperty(CheckboxControlValueAccessor, "ɵfac", /*@__PURE__*/ (() => {
	let ɵCheckboxControlValueAccessor_BaseFactory = void 0;
	return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
		return (ɵCheckboxControlValueAccessor_BaseFactory || (ɵCheckboxControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
	};
})());
_defineProperty(CheckboxControlValueAccessor, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _CheckboxControlValueAccessor,
	selectors: [
		[
			"input",
			"type",
			"checkbox",
			"formControlName",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"input",
			"type",
			"checkbox",
			"formControl",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"input",
			"type",
			"checkbox",
			"ngModel",
			"",
			3,
			"ngNoCva",
			""
		]
	],
	hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
			return ctx.onChange($event.target.checked);
		})("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
			return ctx.onTouched();
		});
	},
	standalone: false,
	features: [ɵɵProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
		type: Directive,
		args: [{
			selector: "input[type=checkbox]:not([ngNoCva])[formControlName],input[type=checkbox]:not([ngNoCva])[formControl],input[type=checkbox]:not([ngNoCva])[ngModel]",
			host: {
				"(change)": "onChange($any($event.target).checked)",
				"(blur)": "onTouched()"
			},
			providers: [CHECKBOX_VALUE_ACCESSOR],
			standalone: false
		}]
	}], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DefaultValueAccessor),
	multi: true
};
function _isAndroid() {
	const userAgent = getDOM() ? getDOM().getUserAgent() : "";
	return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class extends BaseControlValueAccessor {
	constructor(renderer, elementRef, _compositionMode) {
		super(renderer, elementRef);
		_defineProperty(this, "_compositionMode", void 0);
		_defineProperty(this, "_composing", false);
		this._compositionMode = _compositionMode;
		if (this._compositionMode == null) this._compositionMode = !_isAndroid();
	}
	writeValue(value) {
		const normalizedValue = value == null ? "" : value;
		this.setProperty("value", normalizedValue);
	}
	_handleInput(value) {
		if (!this._compositionMode || this._compositionMode && !this._composing) this.onChange(value);
	}
	_compositionStart() {
		this._composing = true;
	}
	_compositionEnd(value) {
		this._composing = false;
		this._compositionMode && this.onChange(value);
	}
};
_DefaultValueAccessor = DefaultValueAccessor;
_defineProperty(DefaultValueAccessor, "ɵfac", function DefaultValueAccessor_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _DefaultValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(COMPOSITION_BUFFER_MODE, 8));
});
_defineProperty(DefaultValueAccessor, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _DefaultValueAccessor,
	selectors: [
		[
			"input",
			"formControlName",
			"",
			3,
			"type",
			"checkbox",
			3,
			"ngNoCva",
			""
		],
		[
			"textarea",
			"formControlName",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"input",
			"formControl",
			"",
			3,
			"type",
			"checkbox",
			3,
			"ngNoCva",
			""
		],
		[
			"textarea",
			"formControl",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"input",
			"ngModel",
			"",
			3,
			"type",
			"checkbox",
			3,
			"ngNoCva",
			""
		],
		[
			"textarea",
			"ngModel",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"",
			"ngDefaultControl",
			""
		]
	],
	hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
			return ctx._handleInput($event.target.value);
		})("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
			return ctx.onTouched();
		})("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
			return ctx._compositionStart();
		})("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
			return ctx._compositionEnd($event.target.value);
		});
	},
	standalone: false,
	features: [ɵɵProvidersFeature([DEFAULT_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
		type: Directive,
		args: [{
			selector: "input:not([type=checkbox]):not([ngNoCva])[formControlName],textarea:not([ngNoCva])[formControlName],input:not([type=checkbox]):not([ngNoCva])[formControl],textarea:not([ngNoCva])[formControl],input:not([type=checkbox]):not([ngNoCva])[ngModel],textarea:not([ngNoCva])[ngModel],[ngDefaultControl]",
			host: {
				"(input)": "_handleInput($any($event.target).value)",
				"(blur)": "onTouched()",
				"(compositionstart)": "_compositionStart()",
				"(compositionend)": "_compositionEnd($any($event.target).value)"
			},
			providers: [DEFAULT_VALUE_ACCESSOR],
			standalone: false
		}]
	}], () => [
		{ type: Renderer2 },
		{ type: ElementRef },
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [COMPOSITION_BUFFER_MODE]
			}]
		}
	], null);
})();
function isEmptyInputValue(value) {
	return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
	if (value == null) return null;
	else if (Array.isArray(value) || typeof value === "string") return value.length;
	else if (value instanceof Set) return value.size;
	return null;
}
var NG_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP$1 = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
	static min(min) {
		return minValidator(min);
	}
	static max(max) {
		return maxValidator(max);
	}
	static required(control) {
		return requiredValidator(control);
	}
	static requiredTrue(control) {
		return requiredTrueValidator(control);
	}
	static email(control) {
		return emailValidator(control);
	}
	static minLength(minLength) {
		return minLengthValidator(minLength);
	}
	static maxLength(maxLength) {
		return maxLengthValidator(maxLength);
	}
	static pattern(pattern) {
		return patternValidator(pattern);
	}
	static nullValidator(control) {
		return nullValidator();
	}
	static compose(validators) {
		return compose(validators);
	}
	static composeAsync(validators) {
		return composeAsync(validators);
	}
};
function minValidator(min) {
	return (control) => {
		if (control.value == null || min == null) return null;
		const value = parseFloat(control.value);
		return !isNaN(value) && value < min ? { "min": {
			"min": min,
			"actual": control.value
		} } : null;
	};
}
function maxValidator(max) {
	return (control) => {
		if (control.value == null || max == null) return null;
		const value = parseFloat(control.value);
		return !isNaN(value) && value > max ? { "max": {
			"max": max,
			"actual": control.value
		} } : null;
	};
}
function requiredValidator(control) {
	return isEmptyInputValue(control.value) ? { "required": true } : null;
}
function requiredTrueValidator(control) {
	return control.value === true ? null : { "required": true };
}
function emailValidator(control) {
	if (isEmptyInputValue(control.value)) return null;
	return EMAIL_REGEXP$1.test(control.value) ? null : { "email": true };
}
function minLengthValidator(minLength) {
	return (control) => {
		var _control$value$length, _control$value;
		const length = (_control$value$length = (_control$value = control.value) === null || _control$value === void 0 ? void 0 : _control$value.length) !== null && _control$value$length !== void 0 ? _control$value$length : lengthOrSize(control.value);
		if (length === null || length === 0) return null;
		return length < minLength ? { "minlength": {
			"requiredLength": minLength,
			"actualLength": length
		} } : null;
	};
}
function maxLengthValidator(maxLength) {
	return (control) => {
		var _control$value$length2, _control$value2;
		const length = (_control$value$length2 = (_control$value2 = control.value) === null || _control$value2 === void 0 ? void 0 : _control$value2.length) !== null && _control$value$length2 !== void 0 ? _control$value$length2 : lengthOrSize(control.value);
		if (length !== null && length > maxLength) return { "maxlength": {
			"requiredLength": maxLength,
			"actualLength": length
		} };
		return null;
	};
}
function patternValidator(pattern) {
	if (!pattern) return nullValidator;
	let regex;
	let regexStr;
	if (typeof pattern === "string") {
		regexStr = "";
		if (pattern.charAt(0) !== "^") regexStr += "^";
		regexStr += pattern;
		if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
		regex = new RegExp(regexStr);
	} else {
		regexStr = pattern.toString();
		regex = pattern;
	}
	return (control) => {
		if (isEmptyInputValue(control.value)) return null;
		const value = control.value;
		return regex.test(value) ? null : { "pattern": {
			"requiredPattern": regexStr,
			"actualValue": value
		} };
	};
}
function nullValidator(control) {
	return null;
}
function isPresent(o) {
	return o != null;
}
function toObservable(value) {
	const obs = isPromise(value) ? from(value) : value;
	if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
		let errorMessage = `Expected async validator to return Promise or Observable.`;
		if (typeof value === "object") errorMessage += " Are you using a synchronous validator where an async validator is expected?";
		throw new RuntimeError(-1101, errorMessage);
	}
	return obs;
}
function mergeErrors(arrayOfErrors) {
	let res = {};
	arrayOfErrors.forEach((errors) => {
		res = errors != null ? _objectSpread2(_objectSpread2({}, res), errors) : res;
	});
	return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
	return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
	return !validator.validate;
}
function normalizeValidators(validators) {
	return validators.map((validator) => {
		return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
	});
}
function compose(validators) {
	if (!validators) return null;
	const presentValidators = validators.filter(isPresent);
	if (presentValidators.length == 0) return null;
	return function(control) {
		return mergeErrors(executeValidators(control, presentValidators));
	};
}
function composeValidators(validators) {
	return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
	if (!validators) return null;
	const presentValidators = validators.filter(isPresent);
	if (presentValidators.length == 0) return null;
	return function(control) {
		return forkJoin(executeValidators(control, presentValidators).map(toObservable)).pipe(map(mergeErrors));
	};
}
function composeAsyncValidators(validators) {
	return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
	if (controlValidators === null) return [dirValidator];
	return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
	return control._rawValidators;
}
function getControlAsyncValidators(control) {
	return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
	if (!validators) return [];
	return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
	return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
	const current = makeValidatorsArray(currentValidators);
	makeValidatorsArray(validators).forEach((v) => {
		if (!hasValidator(current, v)) current.push(v);
	});
	return current;
}
function removeValidators(validators, currentValidators) {
	return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
	constructor() {
		_defineProperty(this, "_composedValidatorFn", void 0);
		_defineProperty(this, "_composedAsyncValidatorFn", void 0);
		_defineProperty(this, "_rawValidators", []);
		_defineProperty(this, "_rawAsyncValidators", []);
		_defineProperty(this, "_onDestroyCallbacks", []);
	}
	get value() {
		return this.control ? this.control.value : null;
	}
	get valid() {
		return this.control ? this.control.valid : null;
	}
	get invalid() {
		return this.control ? this.control.invalid : null;
	}
	get pending() {
		return this.control ? this.control.pending : null;
	}
	get disabled() {
		return this.control ? this.control.disabled : null;
	}
	get enabled() {
		return this.control ? this.control.enabled : null;
	}
	get errors() {
		return this.control ? this.control.errors : null;
	}
	get pristine() {
		return this.control ? this.control.pristine : null;
	}
	get dirty() {
		return this.control ? this.control.dirty : null;
	}
	get touched() {
		return this.control ? this.control.touched : null;
	}
	get status() {
		return this.control ? this.control.status : null;
	}
	get untouched() {
		return this.control ? this.control.untouched : null;
	}
	get statusChanges() {
		return this.control ? this.control.statusChanges : null;
	}
	get valueChanges() {
		return this.control ? this.control.valueChanges : null;
	}
	get path() {
		return null;
	}
	_setValidators(validators) {
		this._rawValidators = validators || [];
		this._composedValidatorFn = composeValidators(this._rawValidators);
	}
	_setAsyncValidators(validators) {
		this._rawAsyncValidators = validators || [];
		this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
	}
	get validator() {
		return this._composedValidatorFn || null;
	}
	get asyncValidator() {
		return this._composedAsyncValidatorFn || null;
	}
	_registerOnDestroy(fn) {
		this._onDestroyCallbacks.push(fn);
	}
	_invokeOnDestroyCallbacks() {
		this._onDestroyCallbacks.forEach((fn) => fn());
		this._onDestroyCallbacks = [];
	}
	reset(value = void 0) {
		var _this$control;
		(_this$control = this.control) === null || _this$control === void 0 || _this$control.reset(value);
	}
	hasError(errorCode, path) {
		return this.control ? this.control.hasError(errorCode, path) : false;
	}
	getError(errorCode, path) {
		return this.control ? this.control.getError(errorCode, path) : null;
	}
};
var ControlContainer = class extends AbstractControlDirective {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "name", void 0);
	}
	get formDirective() {
		return null;
	}
	get path() {
		return null;
	}
};
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
var VERSION = /* @__PURE__ */ new Version("22.2.0");
function controlParentException(nameOrIndex) {
	return new RuntimeError(1050, `formControlName must be used with a parent formGroup or formArray directive. You'll want to add a formGroup/formArray
      directive and pass it an existing FormGroup/FormArray instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
	if (nameOrIndex == null || nameOrIndex === "") return "";
	return `Affected Form Control ${typeof nameOrIndex === "string" ? "name" : "index"}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
	return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
	return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
	return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
	return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
	return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://${VERSION.major !== "0" ? `v${VERSION.major}.` : ""}angular.dev/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}
  `;
}
function describeKey(isFormGroup, key) {
	return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
	return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
	return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
	return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {};
var ValueChangeEvent = class extends ControlEvent {
	constructor(value, source) {
		super();
		_defineProperty(this, "value", void 0);
		_defineProperty(this, "source", void 0);
		this.value = value;
		this.source = source;
	}
};
var PristineChangeEvent = class extends ControlEvent {
	constructor(pristine, source) {
		super();
		_defineProperty(this, "pristine", void 0);
		_defineProperty(this, "source", void 0);
		this.pristine = pristine;
		this.source = source;
	}
};
var TouchedChangeEvent = class extends ControlEvent {
	constructor(touched, source) {
		super();
		_defineProperty(this, "touched", void 0);
		_defineProperty(this, "source", void 0);
		this.touched = touched;
		this.source = source;
	}
};
var StatusChangeEvent = class extends ControlEvent {
	constructor(status, source) {
		super();
		_defineProperty(this, "status", void 0);
		_defineProperty(this, "source", void 0);
		this.status = status;
		this.source = source;
	}
};
var FormSubmittedEvent = class extends ControlEvent {
	constructor(source) {
		super();
		_defineProperty(this, "source", void 0);
		this.source = source;
	}
};
var FormResetEvent = class extends ControlEvent {
	constructor(source) {
		super();
		_defineProperty(this, "source", void 0);
		this.source = source;
	}
};
function pickValidators(validatorOrOpts) {
	return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
	return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
	if (typeof ngDevMode === "undefined" || ngDevMode) {
		if (isOptionsObj(validatorOrOpts) && asyncValidator) console.warn(asyncValidatorsDroppedWithOptsWarning);
	}
	return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
	return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
	return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
	const controls = parent.controls;
	if (!(isGroup ? Object.keys(controls) : controls).length) throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
	if (!hasOwnControl(controls, key)) throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
}
function assertAllValuesPresent(control, isGroup, value) {
	control._forEachChild((_, key) => {
		if (value[key] === void 0) throw new RuntimeError(-1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
	});
}
var AbstractControl = class {
	constructor(validators, asyncValidators) {
		_defineProperty(this, "_pendingDirty", false);
		_defineProperty(this, "_hasOwnPendingAsyncValidator", null);
		_defineProperty(this, "_pendingTouched", false);
		_defineProperty(this, "_onCollectionChange", () => {});
		_defineProperty(this, "_updateOn", void 0);
		_defineProperty(this, "_hasRequired", signal(false, ...ngDevMode ? [{ debugName: "_hasRequired" }] : []));
		_defineProperty(this, "_parent", null);
		_defineProperty(this, "_asyncValidationSubscription", void 0);
		_defineProperty(this, "_composedValidatorFn", void 0);
		_defineProperty(this, "_composedAsyncValidatorFn", void 0);
		_defineProperty(this, "_rawValidators", void 0);
		_defineProperty(this, "_rawAsyncValidators", void 0);
		_defineProperty(this, "value", void 0);
		_defineProperty(this, "_status", computed(() => this.statusReactive(), ...ngDevMode ? [{ debugName: "_status" }] : []));
		_defineProperty(this, "statusReactive", signal(void 0, ...ngDevMode ? [{ debugName: "statusReactive" }] : []));
		_defineProperty(this, "errors", void 0);
		_defineProperty(this, "_pristine", computed(() => this.pristineReactive(), ...ngDevMode ? [{ debugName: "_pristine" }] : []));
		_defineProperty(this, "pristineReactive", signal(true, ...ngDevMode ? [{ debugName: "pristineReactive" }] : []));
		_defineProperty(this, "_touched", computed(() => this.touchedReactive(), ...ngDevMode ? [{ debugName: "_touched" }] : []));
		_defineProperty(this, "touchedReactive", signal(false, ...ngDevMode ? [{ debugName: "touchedReactive" }] : []));
		_defineProperty(this, "_events", new Subject());
		_defineProperty(this, "events", this._events.asObservable());
		_defineProperty(this, "valueChanges", void 0);
		_defineProperty(this, "statusChanges", void 0);
		_defineProperty(this, "_onDisabledChange", []);
		this._assignValidators(validators);
		this._assignAsyncValidators(asyncValidators);
	}
	get validator() {
		return this._composedValidatorFn;
	}
	set validator(validatorFn) {
		this._rawValidators = this._composedValidatorFn = validatorFn;
		this._updateHasRequiredValidator();
	}
	get asyncValidator() {
		return this._composedAsyncValidatorFn;
	}
	set asyncValidator(asyncValidatorFn) {
		this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
	}
	get parent() {
		return this._parent;
	}
	get status() {
		return untracked(this.statusReactive);
	}
	set status(v) {
		untracked(() => this.statusReactive.set(v));
	}
	get valid() {
		return this.status === VALID;
	}
	get invalid() {
		return this.status === INVALID;
	}
	get pending() {
		return this.status === PENDING;
	}
	get disabled() {
		return this.status === DISABLED;
	}
	get enabled() {
		return this.status !== DISABLED;
	}
	get pristine() {
		return untracked(this.pristineReactive);
	}
	set pristine(v) {
		untracked(() => this.pristineReactive.set(v));
	}
	get dirty() {
		return !this.pristine;
	}
	get touched() {
		return untracked(this.touchedReactive);
	}
	set touched(v) {
		untracked(() => this.touchedReactive.set(v));
	}
	get untouched() {
		return !this.touched;
	}
	get updateOn() {
		return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
	}
	setValidators(validators) {
		this._assignValidators(validators);
	}
	setAsyncValidators(validators) {
		this._assignAsyncValidators(validators);
	}
	addValidators(validators) {
		this.setValidators(addValidators(validators, this._rawValidators));
	}
	addAsyncValidators(validators) {
		this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
	}
	removeValidators(validators) {
		this.setValidators(removeValidators(validators, this._rawValidators));
	}
	removeAsyncValidators(validators) {
		this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
	}
	hasValidator(validator) {
		return hasValidator(this._rawValidators, validator);
	}
	hasAsyncValidator(validator) {
		return hasValidator(this._rawAsyncValidators, validator);
	}
	clearValidators() {
		this.validator = null;
	}
	clearAsyncValidators() {
		this.asyncValidator = null;
	}
	markAsTouched(opts = {}) {
		var _opts$sourceControl;
		const changed = this.touched === false;
		this.touched = true;
		const sourceControl = (_opts$sourceControl = opts.sourceControl) !== null && _opts$sourceControl !== void 0 ? _opts$sourceControl : this;
		if (!opts.onlySelf) {
			var _this$_parent;
			(_this$_parent = this._parent) === null || _this$_parent === void 0 || _this$_parent.markAsTouched(_objectSpread2(_objectSpread2({}, opts), {}, { sourceControl }));
		}
		if (changed && opts.emitEvent !== false) this._events.next(new TouchedChangeEvent(true, sourceControl));
	}
	markAllAsDirty(opts = {}) {
		this.markAsDirty({
			onlySelf: true,
			emitEvent: opts.emitEvent,
			sourceControl: this
		});
		this._forEachChild((control) => control.markAllAsDirty(opts));
	}
	markAllAsTouched(opts = {}) {
		this.markAsTouched({
			onlySelf: true,
			emitEvent: opts.emitEvent,
			sourceControl: this
		});
		this._forEachChild((control) => control.markAllAsTouched(opts));
	}
	markAsUntouched(opts = {}) {
		var _opts$sourceControl2;
		const changed = this.touched === true;
		this.touched = false;
		this._pendingTouched = false;
		const sourceControl = (_opts$sourceControl2 = opts.sourceControl) !== null && _opts$sourceControl2 !== void 0 ? _opts$sourceControl2 : this;
		this._forEachChild((control) => {
			control.markAsUntouched({
				onlySelf: true,
				emitEvent: opts.emitEvent,
				sourceControl
			});
		});
		if (!opts.onlySelf) {
			var _this$_parent2;
			(_this$_parent2 = this._parent) === null || _this$_parent2 === void 0 || _this$_parent2._updateTouched(opts, sourceControl);
		}
		if (changed && opts.emitEvent !== false) this._events.next(new TouchedChangeEvent(false, sourceControl));
	}
	markAsDirty(opts = {}) {
		var _opts$sourceControl3;
		const changed = this.pristine === true;
		this.pristine = false;
		const sourceControl = (_opts$sourceControl3 = opts.sourceControl) !== null && _opts$sourceControl3 !== void 0 ? _opts$sourceControl3 : this;
		if (!opts.onlySelf) {
			var _this$_parent3;
			(_this$_parent3 = this._parent) === null || _this$_parent3 === void 0 || _this$_parent3.markAsDirty(_objectSpread2(_objectSpread2({}, opts), {}, { sourceControl }));
		}
		if (changed && opts.emitEvent !== false) this._events.next(new PristineChangeEvent(false, sourceControl));
	}
	markAsPristine(opts = {}) {
		var _opts$sourceControl4;
		const changed = this.pristine === false;
		this.pristine = true;
		this._pendingDirty = false;
		const sourceControl = (_opts$sourceControl4 = opts.sourceControl) !== null && _opts$sourceControl4 !== void 0 ? _opts$sourceControl4 : this;
		this._forEachChild((control) => {
			control.markAsPristine({
				onlySelf: true,
				emitEvent: opts.emitEvent
			});
		});
		if (!opts.onlySelf) {
			var _this$_parent4;
			(_this$_parent4 = this._parent) === null || _this$_parent4 === void 0 || _this$_parent4._updatePristine(opts, sourceControl);
		}
		if (changed && opts.emitEvent !== false) this._events.next(new PristineChangeEvent(true, sourceControl));
	}
	markAsPending(opts = {}) {
		var _opts$sourceControl5;
		this.status = PENDING;
		const sourceControl = (_opts$sourceControl5 = opts.sourceControl) !== null && _opts$sourceControl5 !== void 0 ? _opts$sourceControl5 : this;
		if (opts.emitEvent !== false) {
			this._events.next(new StatusChangeEvent(this.status, sourceControl));
			this.statusChanges.emit(this.status);
		}
		if (!opts.onlySelf) {
			var _this$_parent5;
			(_this$_parent5 = this._parent) === null || _this$_parent5 === void 0 || _this$_parent5.markAsPending(_objectSpread2(_objectSpread2({}, opts), {}, { sourceControl }));
		}
	}
	disable(opts = {}) {
		var _opts$sourceControl6;
		const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
		this.status = DISABLED;
		this.errors = null;
		this._forEachChild((control) => {
			control.disable(_objectSpread2(_objectSpread2({}, opts), {}, { onlySelf: true }));
		});
		this._updateValue();
		const sourceControl = (_opts$sourceControl6 = opts.sourceControl) !== null && _opts$sourceControl6 !== void 0 ? _opts$sourceControl6 : this;
		if (opts.emitEvent !== false) {
			this._events.next(new ValueChangeEvent(this.value, sourceControl));
			this._events.next(new StatusChangeEvent(this.status, sourceControl));
			this.valueChanges.emit(this.value);
			this.statusChanges.emit(this.status);
		}
		this._updateAncestors(_objectSpread2(_objectSpread2({}, opts), {}, { skipPristineCheck }), this);
		this._onDisabledChange.forEach((changeFn) => changeFn(true));
	}
	enable(opts = {}) {
		const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
		this.status = VALID;
		this._forEachChild((control) => {
			control.enable(_objectSpread2(_objectSpread2({}, opts), {}, { onlySelf: true }));
		});
		this.updateValueAndValidity({
			onlySelf: true,
			emitEvent: opts.emitEvent
		});
		this._updateAncestors(_objectSpread2(_objectSpread2({}, opts), {}, { skipPristineCheck }), this);
		this._onDisabledChange.forEach((changeFn) => changeFn(false));
	}
	_updateAncestors(opts, sourceControl) {
		if (!opts.onlySelf) {
			var _this$_parent6, _this$_parent8;
			(_this$_parent6 = this._parent) === null || _this$_parent6 === void 0 || _this$_parent6.updateValueAndValidity(opts);
			if (!opts.skipPristineCheck) {
				var _this$_parent7;
				(_this$_parent7 = this._parent) === null || _this$_parent7 === void 0 || _this$_parent7._updatePristine({}, sourceControl);
			}
			(_this$_parent8 = this._parent) === null || _this$_parent8 === void 0 || _this$_parent8._updateTouched({}, sourceControl);
		}
	}
	setParent(parent) {
		this._parent = parent;
	}
	getRawValue() {
		return this.value;
	}
	updateValueAndValidity(opts = {}) {
		var _opts$sourceControl7;
		this._setInitialStatus();
		this._updateValue();
		if (this.enabled) {
			const shouldHaveEmitted = this._cancelExistingSubscription();
			this.errors = this._runValidator();
			this.status = this._calculateStatus();
			if (this.status === VALID || this.status === PENDING) this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
		}
		const sourceControl = (_opts$sourceControl7 = opts.sourceControl) !== null && _opts$sourceControl7 !== void 0 ? _opts$sourceControl7 : this;
		if (opts.emitEvent !== false) {
			this._events.next(new ValueChangeEvent(this.value, sourceControl));
			this._events.next(new StatusChangeEvent(this.status, sourceControl));
			this.valueChanges.emit(this.value);
			this.statusChanges.emit(this.status);
		}
		if (!opts.onlySelf) {
			var _this$_parent9;
			(_this$_parent9 = this._parent) === null || _this$_parent9 === void 0 || _this$_parent9.updateValueAndValidity(_objectSpread2(_objectSpread2({}, opts), {}, { sourceControl }));
		}
	}
	_updateTreeValidity(opts = { emitEvent: true }) {
		this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
		this.updateValueAndValidity({
			onlySelf: true,
			emitEvent: opts.emitEvent
		});
	}
	_setInitialStatus() {
		this.status = this._allControlsDisabled() ? DISABLED : VALID;
	}
	_runValidator() {
		return this.validator ? this.validator(this) : null;
	}
	_runAsyncValidator(shouldHaveEmitted, emitEvent) {
		if (this.asyncValidator) {
			this.status = PENDING;
			this._hasOwnPendingAsyncValidator = {
				emitEvent: emitEvent !== false,
				shouldHaveEmitted: shouldHaveEmitted !== false
			};
			const obs = toObservable(this.asyncValidator(this));
			this._asyncValidationSubscription = obs.subscribe((errors) => {
				this._hasOwnPendingAsyncValidator = null;
				this.setErrors(errors, {
					emitEvent,
					shouldHaveEmitted
				});
			});
		}
	}
	_cancelExistingSubscription() {
		if (this._asyncValidationSubscription) {
			var _ref, _this$_hasOwnPendingA, _this$_hasOwnPendingA2;
			this._asyncValidationSubscription.unsubscribe();
			const shouldHaveEmitted = (_ref = ((_this$_hasOwnPendingA = this._hasOwnPendingAsyncValidator) === null || _this$_hasOwnPendingA === void 0 ? void 0 : _this$_hasOwnPendingA.emitEvent) || ((_this$_hasOwnPendingA2 = this._hasOwnPendingAsyncValidator) === null || _this$_hasOwnPendingA2 === void 0 ? void 0 : _this$_hasOwnPendingA2.shouldHaveEmitted)) !== null && _ref !== void 0 ? _ref : false;
			this._hasOwnPendingAsyncValidator = null;
			return shouldHaveEmitted;
		}
		return false;
	}
	setErrors(errors, opts = {}) {
		this.errors = errors;
		this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
	}
	get(path) {
		let currPath = path;
		if (currPath == null) return null;
		if (!Array.isArray(currPath)) currPath = currPath.split(".");
		if (currPath.length === 0) return null;
		return currPath.reduce((control, name) => control && control._find(name), this);
	}
	getError(errorCode, path) {
		const control = path ? this.get(path) : this;
		return (control === null || control === void 0 ? void 0 : control.errors) ? control.errors[errorCode] : null;
	}
	hasError(errorCode, path) {
		return !!this.getError(errorCode, path);
	}
	get root() {
		let x = this;
		while (x._parent) x = x._parent;
		return x;
	}
	_updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
		this.status = this._calculateStatus();
		if (emitEvent) this.statusChanges.emit(this.status);
		if (emitEvent || shouldHaveEmitted) this._events.next(new StatusChangeEvent(this.status, changedControl));
		if (this._parent) this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
	}
	_initObservables() {
		this.valueChanges = new EventEmitter();
		this.statusChanges = new EventEmitter();
	}
	_calculateStatus() {
		if (this._allControlsDisabled()) return DISABLED;
		if (this.errors) return INVALID;
		if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
		if (this._anyControlsHaveStatus(INVALID)) return INVALID;
		return VALID;
	}
	_anyControlsHaveStatus(status) {
		return this._anyControls((control) => control.status === status);
	}
	_anyControlsDirty() {
		return this._anyControls((control) => control.dirty);
	}
	_anyControlsTouched() {
		return this._anyControls((control) => control.touched);
	}
	_updatePristine(opts, changedControl) {
		const newPristine = !this._anyControlsDirty();
		const changed = this.pristine !== newPristine;
		this.pristine = newPristine;
		if (!opts.onlySelf) {
			var _this$_parent10;
			(_this$_parent10 = this._parent) === null || _this$_parent10 === void 0 || _this$_parent10._updatePristine(opts, changedControl);
		}
		if (changed) this._events.next(new PristineChangeEvent(this.pristine, changedControl));
	}
	_updateTouched(opts = {}, changedControl) {
		this.touched = this._anyControlsTouched();
		this._events.next(new TouchedChangeEvent(this.touched, changedControl));
		if (!opts.onlySelf) {
			var _this$_parent11;
			(_this$_parent11 = this._parent) === null || _this$_parent11 === void 0 || _this$_parent11._updateTouched(opts, changedControl);
		}
	}
	_registerOnCollectionChange(fn) {
		this._onCollectionChange = fn;
	}
	_setUpdateStrategy(opts) {
		if (isOptionsObj(opts) && opts.updateOn != null) this._updateOn = opts.updateOn;
	}
	_parentMarkedDirty(onlySelf) {
		var _this$_parent12;
		return !onlySelf && !!((_this$_parent12 = this._parent) === null || _this$_parent12 === void 0 ? void 0 : _this$_parent12.dirty) && !this._parent._anyControlsDirty();
	}
	_find(name) {
		return null;
	}
	_assignValidators(validators) {
		this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
		this._composedValidatorFn = coerceToValidator(this._rawValidators);
		this._updateHasRequiredValidator();
	}
	_assignAsyncValidators(validators) {
		this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
		this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
	}
	_updateHasRequiredValidator() {
		untracked(() => this._hasRequired.set(this.hasValidator(Validators.required)));
	}
};
function hasOwnControl(controls, name) {
	return Object.hasOwn(controls, name);
}
function isNativeFormElement(element) {
	return element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA";
}
function elementAcceptsMinMax(element) {
	if (element.tagName !== "INPUT") return false;
	const type = element.type;
	return type === "number" || type === "range" || type === "date" || type === "month";
}
function isTextualFormElement(element) {
	return element.tagName === "INPUT" || element.tagName === "TEXTAREA";
}
function setNativeDomProperty(renderer, element, name, value) {
	switch (name) {
		case "name":
			renderer.setAttribute(element, name, value);
			break;
		case "disabled":
		case "readonly":
		case "required":
			if (value) renderer.setAttribute(element, name, "");
			else renderer.removeAttribute(element, name);
			break;
		case "max":
		case "min":
		case "minLength":
		case "maxLength": if (value !== void 0) renderer.setAttribute(element, name, value.toString());
		else renderer.removeAttribute(element, name);
	}
}
var ReactiveValidationError = class {
	constructor({ kind, context, control }) {
		_defineProperty(this, "kind", void 0);
		_defineProperty(this, "context", void 0);
		_defineProperty(this, "control", void 0);
		_defineProperty(this, "message", void 0);
		this.kind = kind;
		this.context = context;
		this.control = control;
	}
};
function toInteger(value) {
	return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
	return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class {
	constructor() {
		_defineProperty(this, "_validator", nullValidator);
		_defineProperty(this, "_onChange", void 0);
		_defineProperty(this, "_enabled", void 0);
	}
	ngOnChanges(changes) {
		if (this.inputName in changes) {
			var _this$_onChange;
			const input = this.normalizeInput(changes[this.inputName].currentValue);
			this._enabled = this.enabled(input);
			this._validator = this._enabled ? this.createValidator(input) : nullValidator;
			(_this$_onChange = this._onChange) === null || _this$_onChange === void 0 || _this$_onChange.call(this);
		}
	}
	validate(control) {
		return this._validator(control);
	}
	registerOnValidatorChange(fn) {
		this._onChange = fn;
	}
	enabled(input) {
		return input != null;
	}
};
_AbstractValidatorDirective = AbstractValidatorDirective;
_defineProperty(AbstractValidatorDirective, "ɵfac", function AbstractValidatorDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _AbstractValidatorDirective)();
});
_defineProperty(AbstractValidatorDirective, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _AbstractValidatorDirective,
	features: [ɵɵNgOnChangesFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{ type: Directive }], null, null);
})();
var MAX_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => MaxValidator),
	multi: true
};
var MaxValidator = class extends AbstractValidatorDirective {
	constructor(..._args2) {
		super(..._args2);
		_defineProperty(this, "max", void 0);
		_defineProperty(this, "inputName", "max");
		_defineProperty(this, "normalizeInput", (input) => toFloat(input));
		_defineProperty(this, "createValidator", (max) => maxValidator(max));
	}
};
_MaxValidator = MaxValidator;
_defineProperty(MaxValidator, "ɵfac", /*@__PURE__*/ (() => {
	let ɵMaxValidator_BaseFactory = void 0;
	return function MaxValidator_Factory(__ngFactoryType__) {
		return (ɵMaxValidator_BaseFactory || (ɵMaxValidator_BaseFactory = ɵɵgetInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
	};
})());
_defineProperty(MaxValidator, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _MaxValidator,
	selectors: [
		[
			"input",
			"type",
			"number",
			"max",
			"",
			"formControlName",
			""
		],
		[
			"input",
			"type",
			"number",
			"max",
			"",
			"formControl",
			""
		],
		[
			"input",
			"type",
			"number",
			"max",
			"",
			"ngModel",
			""
		]
	],
	hostVars: 1,
	hostBindings: function MaxValidator_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵattribute("max", ctx._enabled ? ctx.max : null);
	},
	inputs: { max: "max" },
	standalone: false,
	features: [ɵɵProvidersFeature([MAX_VALIDATOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
		type: Directive,
		args: [{
			selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
			providers: [MAX_VALIDATOR],
			host: { "[attr.max]": "_enabled ? max : null" },
			standalone: false
		}]
	}], null, { max: [{ type: Input }] });
})();
var MIN_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => MinValidator),
	multi: true
};
var MinValidator = class extends AbstractValidatorDirective {
	constructor(..._args3) {
		super(..._args3);
		_defineProperty(this, "min", void 0);
		_defineProperty(this, "inputName", "min");
		_defineProperty(this, "normalizeInput", (input) => toFloat(input));
		_defineProperty(this, "createValidator", (min) => minValidator(min));
	}
};
_MinValidator = MinValidator;
_defineProperty(MinValidator, "ɵfac", /*@__PURE__*/ (() => {
	let ɵMinValidator_BaseFactory = void 0;
	return function MinValidator_Factory(__ngFactoryType__) {
		return (ɵMinValidator_BaseFactory || (ɵMinValidator_BaseFactory = ɵɵgetInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
	};
})());
_defineProperty(MinValidator, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _MinValidator,
	selectors: [
		[
			"input",
			"type",
			"number",
			"min",
			"",
			"formControlName",
			""
		],
		[
			"input",
			"type",
			"number",
			"min",
			"",
			"formControl",
			""
		],
		[
			"input",
			"type",
			"number",
			"min",
			"",
			"ngModel",
			""
		]
	],
	hostVars: 1,
	hostBindings: function MinValidator_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵattribute("min", ctx._enabled ? ctx.min : null);
	},
	inputs: { min: "min" },
	standalone: false,
	features: [ɵɵProvidersFeature([MIN_VALIDATOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
		type: Directive,
		args: [{
			selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
			providers: [MIN_VALIDATOR],
			host: { "[attr.min]": "_enabled ? min : null" },
			standalone: false
		}]
	}], null, { min: [{ type: Input }] });
})();
var REQUIRED_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => RequiredValidator),
	multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => CheckboxRequiredValidator),
	multi: true
};
var RequiredValidator = class extends AbstractValidatorDirective {
	constructor(..._args4) {
		super(..._args4);
		_defineProperty(this, "required", void 0);
		_defineProperty(this, "inputName", "required");
		_defineProperty(this, "normalizeInput", booleanAttribute);
		_defineProperty(this, "createValidator", (input) => requiredValidator);
	}
	enabled(input) {
		return input;
	}
};
_RequiredValidator = RequiredValidator;
_defineProperty(RequiredValidator, "ɵfac", /*@__PURE__*/ (() => {
	let ɵRequiredValidator_BaseFactory = void 0;
	return function RequiredValidator_Factory(__ngFactoryType__) {
		return (ɵRequiredValidator_BaseFactory || (ɵRequiredValidator_BaseFactory = ɵɵgetInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
	};
})());
_defineProperty(RequiredValidator, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _RequiredValidator,
	selectors: [
		[
			"",
			"required",
			"",
			"formControlName",
			"",
			3,
			"type",
			"checkbox"
		],
		[
			"",
			"required",
			"",
			"formControl",
			"",
			3,
			"type",
			"checkbox"
		],
		[
			"",
			"required",
			"",
			"ngModel",
			"",
			3,
			"type",
			"checkbox"
		]
	],
	hostVars: 1,
	hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵattribute("required", ctx._enabled ? "" : null);
	},
	inputs: { required: "required" },
	standalone: false,
	features: [ɵɵProvidersFeature([REQUIRED_VALIDATOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
		type: Directive,
		args: [{
			selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
			providers: [REQUIRED_VALIDATOR],
			host: { "[attr.required]": "_enabled ? \"\" : null" },
			standalone: false
		}]
	}], null, { required: [{ type: Input }] });
})();
var CheckboxRequiredValidator = class extends RequiredValidator {
	constructor(..._args5) {
		super(..._args5);
		_defineProperty(this, "createValidator", (input) => requiredTrueValidator);
	}
};
_CheckboxRequiredValidator = CheckboxRequiredValidator;
_defineProperty(CheckboxRequiredValidator, "ɵfac", /*@__PURE__*/ (() => {
	let ɵCheckboxRequiredValidator_BaseFactory = void 0;
	return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
		return (ɵCheckboxRequiredValidator_BaseFactory || (ɵCheckboxRequiredValidator_BaseFactory = ɵɵgetInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
	};
})());
_defineProperty(CheckboxRequiredValidator, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _CheckboxRequiredValidator,
	selectors: [
		[
			"input",
			"type",
			"checkbox",
			"required",
			"",
			"formControlName",
			""
		],
		[
			"input",
			"type",
			"checkbox",
			"required",
			"",
			"formControl",
			""
		],
		[
			"input",
			"type",
			"checkbox",
			"required",
			"",
			"ngModel",
			""
		]
	],
	hostVars: 1,
	hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵattribute("required", ctx._enabled ? "" : null);
	},
	standalone: false,
	features: [ɵɵProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
		type: Directive,
		args: [{
			selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
			providers: [CHECKBOX_REQUIRED_VALIDATOR],
			host: { "[attr.required]": "_enabled ? \"\" : null" },
			standalone: false
		}]
	}], null, null);
})();
var EMAIL_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => EmailValidator),
	multi: true
};
var EmailValidator = class extends AbstractValidatorDirective {
	constructor(..._args6) {
		super(..._args6);
		_defineProperty(this, "email", void 0);
		_defineProperty(this, "inputName", "email");
		_defineProperty(this, "normalizeInput", booleanAttribute);
		_defineProperty(this, "createValidator", (input) => emailValidator);
	}
	enabled(input) {
		return input;
	}
};
_EmailValidator = EmailValidator;
_defineProperty(EmailValidator, "ɵfac", /*@__PURE__*/ (() => {
	let ɵEmailValidator_BaseFactory = void 0;
	return function EmailValidator_Factory(__ngFactoryType__) {
		return (ɵEmailValidator_BaseFactory || (ɵEmailValidator_BaseFactory = ɵɵgetInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
	};
})());
_defineProperty(EmailValidator, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _EmailValidator,
	selectors: [
		[
			"",
			"email",
			"",
			"formControlName",
			""
		],
		[
			"",
			"email",
			"",
			"formControl",
			""
		],
		[
			"",
			"email",
			"",
			"ngModel",
			""
		]
	],
	inputs: { email: "email" },
	standalone: false,
	features: [ɵɵProvidersFeature([EMAIL_VALIDATOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
		type: Directive,
		args: [{
			selector: "[email][formControlName],[email][formControl],[email][ngModel]",
			providers: [EMAIL_VALIDATOR],
			standalone: false
		}]
	}], null, { email: [{ type: Input }] });
})();
var MIN_LENGTH_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => MinLengthValidator),
	multi: true
};
var MinLengthValidator = class extends AbstractValidatorDirective {
	constructor(..._args7) {
		super(..._args7);
		_defineProperty(this, "minlength", void 0);
		_defineProperty(this, "inputName", "minlength");
		_defineProperty(this, "normalizeInput", (input) => toInteger(input));
		_defineProperty(this, "createValidator", (minlength) => minLengthValidator(minlength));
	}
};
_MinLengthValidator = MinLengthValidator;
_defineProperty(MinLengthValidator, "ɵfac", /*@__PURE__*/ (() => {
	let ɵMinLengthValidator_BaseFactory = void 0;
	return function MinLengthValidator_Factory(__ngFactoryType__) {
		return (ɵMinLengthValidator_BaseFactory || (ɵMinLengthValidator_BaseFactory = ɵɵgetInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
	};
})());
_defineProperty(MinLengthValidator, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _MinLengthValidator,
	selectors: [
		[
			"",
			"minlength",
			"",
			"formControlName",
			""
		],
		[
			"",
			"minlength",
			"",
			"formControl",
			""
		],
		[
			"",
			"minlength",
			"",
			"ngModel",
			""
		]
	],
	hostVars: 1,
	hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵattribute("minlength", ctx._enabled ? ctx.minlength : null);
	},
	inputs: { minlength: "minlength" },
	standalone: false,
	features: [ɵɵProvidersFeature([MIN_LENGTH_VALIDATOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
		type: Directive,
		args: [{
			selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
			providers: [MIN_LENGTH_VALIDATOR],
			host: { "[attr.minlength]": "_enabled ? minlength : null" },
			standalone: false
		}]
	}], null, { minlength: [{ type: Input }] });
})();
var MAX_LENGTH_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => MaxLengthValidator),
	multi: true
};
var MaxLengthValidator = class extends AbstractValidatorDirective {
	constructor(..._args8) {
		super(..._args8);
		_defineProperty(this, "maxlength", void 0);
		_defineProperty(this, "inputName", "maxlength");
		_defineProperty(this, "normalizeInput", (input) => toInteger(input));
		_defineProperty(this, "createValidator", (maxlength) => maxLengthValidator(maxlength));
	}
};
_MaxLengthValidator = MaxLengthValidator;
_defineProperty(MaxLengthValidator, "ɵfac", /*@__PURE__*/ (() => {
	let ɵMaxLengthValidator_BaseFactory = void 0;
	return function MaxLengthValidator_Factory(__ngFactoryType__) {
		return (ɵMaxLengthValidator_BaseFactory || (ɵMaxLengthValidator_BaseFactory = ɵɵgetInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
	};
})());
_defineProperty(MaxLengthValidator, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _MaxLengthValidator,
	selectors: [
		[
			"",
			"maxlength",
			"",
			"formControlName",
			""
		],
		[
			"",
			"maxlength",
			"",
			"formControl",
			""
		],
		[
			"",
			"maxlength",
			"",
			"ngModel",
			""
		]
	],
	hostVars: 1,
	hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵattribute("maxlength", ctx._enabled ? ctx.maxlength : null);
	},
	inputs: { maxlength: "maxlength" },
	standalone: false,
	features: [ɵɵProvidersFeature([MAX_LENGTH_VALIDATOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
		type: Directive,
		args: [{
			selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
			providers: [MAX_LENGTH_VALIDATOR],
			host: { "[attr.maxlength]": "_enabled ? maxlength : null" },
			standalone: false
		}]
	}], null, { maxlength: [{ type: Input }] });
})();
var PATTERN_VALIDATOR = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => PatternValidator),
	multi: true
};
var PatternValidator = class extends AbstractValidatorDirective {
	constructor(..._args9) {
		super(..._args9);
		_defineProperty(this, "pattern", void 0);
		_defineProperty(this, "inputName", "pattern");
		_defineProperty(this, "normalizeInput", (input) => input);
		_defineProperty(this, "createValidator", (input) => patternValidator(input));
	}
};
_PatternValidator = PatternValidator;
_defineProperty(PatternValidator, "ɵfac", /*@__PURE__*/ (() => {
	let ɵPatternValidator_BaseFactory = void 0;
	return function PatternValidator_Factory(__ngFactoryType__) {
		return (ɵPatternValidator_BaseFactory || (ɵPatternValidator_BaseFactory = ɵɵgetInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
	};
})());
_defineProperty(PatternValidator, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _PatternValidator,
	selectors: [
		[
			"",
			"pattern",
			"",
			"formControlName",
			""
		],
		[
			"",
			"pattern",
			"",
			"formControl",
			""
		],
		[
			"",
			"pattern",
			"",
			"ngModel",
			""
		]
	],
	hostVars: 1,
	hostBindings: function PatternValidator_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵattribute("pattern", ctx._enabled ? ctx.pattern : null);
	},
	inputs: { pattern: "pattern" },
	standalone: false,
	features: [ɵɵProvidersFeature([PATTERN_VALIDATOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
		type: Directive,
		args: [{
			selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
			providers: [PATTERN_VALIDATOR],
			host: { "[attr.pattern]": "_enabled ? pattern : null" },
			standalone: false
		}]
	}], null, { pattern: [{ type: Input }] });
})();
var ɵFORM_CONTROL_INTEGRATION = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "FORM_CONTROL_INTEGRATION" : "");
var CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", { factory: () => setDisabledStateDefault });
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
	return [...parent.path, name];
}
function setUpControlValueAccessor(control, dir, callSetDisabledState = setDisabledStateDefault) {
	if (typeof ngDevMode === "undefined" || ngDevMode) {
		if (!control) _throwError(dir, "Cannot find control with");
		if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
	}
	setUpValidators(control, dir);
	dir.valueAccessor.writeValue(control.value);
	if (control.disabled || callSetDisabledState === "always") {
		var _dir$valueAccessor$se, _dir$valueAccessor;
		(_dir$valueAccessor$se = (_dir$valueAccessor = dir.valueAccessor).setDisabledState) === null || _dir$valueAccessor$se === void 0 || _dir$valueAccessor$se.call(_dir$valueAccessor, control.disabled);
	}
	setUpViewChangePipeline(control, dir);
	setUpModelChangePipeline(control, dir);
	setUpBlurPipeline(control, dir);
	setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
	var _dir$valueAccessor2, _dir$valueAccessor3;
	const noop = () => {
		if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) _noControlError(dir);
	};
	dir === null || dir === void 0 || (_dir$valueAccessor2 = dir.valueAccessor) === null || _dir$valueAccessor2 === void 0 || _dir$valueAccessor2.registerOnChange(noop);
	dir === null || dir === void 0 || (_dir$valueAccessor3 = dir.valueAccessor) === null || _dir$valueAccessor3 === void 0 || _dir$valueAccessor3.registerOnTouched(noop);
	cleanUpValidators(control, dir);
	if (control) {
		dir._invokeOnDestroyCallbacks();
		control._registerOnCollectionChange(() => {});
	}
}
function registerOnValidatorChange(validators, onChange) {
	validators.forEach((validator) => {
		if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
	});
}
function setUpDisabledChangeHandler(control, dir) {
	if (dir.valueAccessor.setDisabledState) {
		const onDisabledChange = (isDisabled) => {
			dir.valueAccessor.setDisabledState(isDisabled);
		};
		control.registerOnDisabledChange(onDisabledChange);
		dir._registerOnDestroy(() => {
			control._unregisterOnDisabledChange(onDisabledChange);
		});
	}
}
function setUpValidators(control, dir) {
	const validators = getControlValidators(control);
	if (dir.validator !== null) control.setValidators(mergeValidators(validators, dir.validator));
	else if (typeof validators === "function") control.setValidators([validators]);
	const asyncValidators = getControlAsyncValidators(control);
	if (dir.asyncValidator !== null) control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
	else if (typeof asyncValidators === "function") control.setAsyncValidators([asyncValidators]);
	const onValidatorChange = () => control.updateValueAndValidity();
	registerOnValidatorChange(dir._rawValidators, onValidatorChange);
	registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
	let isControlUpdated = false;
	if (control !== null) {
		if (dir.validator !== null) {
			const validators = getControlValidators(control);
			if (Array.isArray(validators) && validators.length > 0) {
				const updatedValidators = validators.filter((validator) => validator !== dir.validator);
				if (updatedValidators.length !== validators.length) {
					isControlUpdated = true;
					control.setValidators(updatedValidators);
				}
			}
		}
		if (dir.asyncValidator !== null) {
			const asyncValidators = getControlAsyncValidators(control);
			if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
				const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
				if (updatedAsyncValidators.length !== asyncValidators.length) {
					isControlUpdated = true;
					control.setAsyncValidators(updatedAsyncValidators);
				}
			}
		}
	}
	const noop = () => {};
	registerOnValidatorChange(dir._rawValidators, noop);
	registerOnValidatorChange(dir._rawAsyncValidators, noop);
	return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
	dir.valueAccessor.registerOnChange((newValue) => {
		control._pendingValue = newValue;
		control._pendingChange = true;
		control._pendingDirty = true;
		if (control.updateOn === "change") updateControl(control, dir);
	});
}
function setUpBlurPipeline(control, dir) {
	dir.valueAccessor.registerOnTouched(() => {
		control._pendingTouched = true;
		if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
		if (control.updateOn !== "submit") control.markAsTouched();
	});
}
function updateControl(control, dir) {
	if (control._pendingDirty) control.markAsDirty();
	control.setValue(control._pendingValue, { emitModelToViewChange: false });
	dir.viewToModelUpdate(control._pendingValue);
	control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
	const onChange = (newValue, emitModelEvent) => {
		dir.valueAccessor.writeValue(newValue);
		if (emitModelEvent) dir.viewToModelUpdate(newValue);
	};
	control.registerOnChange(onChange);
	dir._registerOnDestroy(() => {
		control._unregisterOnChange(onChange);
	});
}
function setUpFormContainer(control, dir) {
	if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
	setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
	return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
	return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
	const messageEnd = _describeControlLocation(dir);
	throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
	const path = dir.path;
	if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
	if (path === null || path === void 0 ? void 0 : path[0]) return `name: '${path}'`;
	return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
	const loc = _describeControlLocation(dir);
	throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
	const loc = _describeControlLocation(dir);
	throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
	if (!Object.hasOwn(changes, "model")) return false;
	const change = changes["model"];
	if (change.isFirstChange()) return true;
	return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
	return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
	form._syncPendingControls();
	directives.forEach((dir) => {
		const control = dir.control;
		if (control.updateOn === "submit" && control._pendingChange) {
			dir.viewToModelUpdate(control._pendingValue);
			control._pendingChange = false;
		}
	});
}
function selectValueAccessor(dir, valueAccessors) {
	if (!valueAccessors) return null;
	if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
	let defaultAccessor = void 0;
	let builtinAccessor = void 0;
	let customAccessor = void 0;
	valueAccessors.forEach((v) => {
		if (v.constructor === DefaultValueAccessor) defaultAccessor = v;
		else if (isBuiltInAccessor(v)) {
			if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
			builtinAccessor = v;
		} else {
			if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
			customAccessor = v;
		}
	});
	if (customAccessor) return customAccessor;
	if (builtinAccessor) return builtinAccessor;
	if (defaultAccessor) return defaultAccessor;
	if (typeof ngDevMode === "undefined" || ngDevMode) _throwError(dir, "No valid value accessor for form control with");
	return null;
}
function removeListItem$1(list, el) {
	const index = list.indexOf(el);
	if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
	if (warningConfig === "never") return;
	if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
		console.warn(ngModelWarning(name));
		type._ngModelWarningSentOnce = true;
		instance._ngModelWarningSent = true;
	}
}
var NG_CONTROL_INTEGRATION_PROVIDER = {
	provide: ɵFORM_CONTROL_INTEGRATION,
	useFactory: () => {
		const control = inject(NgControl, { self: true });
		return {
			setParseErrors: (source) => {
				control.setParseErrorSource(source);
			},
			set onReset(callback) {
				control.onReset = callback;
			}
		};
	}
};
var NgControl = class extends AbstractControlDirective {
	set onReset(callback) {
		var _this$resetSubscripti;
		this.userOnReset = callback;
		(_this$resetSubscripti = this.resetSubscription) === null || _this$resetSubscripti === void 0 || _this$resetSubscripti.unsubscribe();
		this.resetSubscription = void 0;
		if (this.control) {
			var _this$subscription;
			this.resetSubscription = this.control.events.subscribe((event) => {
				if (event instanceof FormResetEvent && this.control) {
					var _this$userOnReset;
					(_this$userOnReset = this.userOnReset) === null || _this$userOnReset === void 0 || _this$userOnReset.call(this, this.control.value);
				}
			});
			(_this$subscription = this.subscription) === null || _this$subscription === void 0 || _this$subscription.add(this.resetSubscription);
		}
	}
	get selectedValueAccessor() {
		var _this$_selectedValueA;
		return (_this$_selectedValueA = this._selectedValueAccessor) !== null && _this$_selectedValueA !== void 0 ? _this$_selectedValueA : this._selectedValueAccessor = selectValueAccessor(this, this.rawValueAccessors);
	}
	constructor(injector, renderer, rawValueAccessors) {
		var _this$injector;
		super();
		_defineProperty(this, "_parent", null);
		_defineProperty(this, "name", null);
		_defineProperty(this, "valueAccessor", null);
		_defineProperty(this, "isCustomControlBased", false);
		_defineProperty(this, "userOnReset", void 0);
		_defineProperty(this, "resetSubscription", void 0);
		_defineProperty(this, "isNativeFormElement", false);
		_defineProperty(this, "rawValueAccessors", void 0);
		_defineProperty(this, "_selectedValueAccessor", null);
		_defineProperty(this, "parseErrorsValidator", null);
		_defineProperty(this, "renderer", void 0);
		_defineProperty(this, "injector", void 0);
		_defineProperty(this, "requiredValidatorViaDi", void 0);
		_defineProperty(this, "subscription", void 0);
		_defineProperty(this, "customControlBindings", null);
		this.injector = injector;
		this.renderer = renderer;
		this.rawValueAccessors = rawValueAccessors;
		(_this$injector = this.injector) === null || _this$injector === void 0 || (_this$injector = _this$injector.get(DestroyRef)) === null || _this$injector === void 0 || _this$injector.onDestroy(() => {
			var _this$subscription2;
			this.removeParseErrorsValidator(this.control);
			(_this$subscription2 = this.subscription) === null || _this$subscription2 === void 0 || _this$subscription2.unsubscribe();
		});
	}
	setupCustomControl() {
		var _this$subscription3, _this$injector2, _this$resetSubscripti2;
		(_this$subscription3 = this.subscription) === null || _this$subscription3 === void 0 || _this$subscription3.unsubscribe();
		const cdr = (_this$injector2 = this.injector) === null || _this$injector2 === void 0 ? void 0 : _this$injector2.get(ChangeDetectorRef);
		if (!this.control || !cdr) return;
		const markForCheck = cdr.markForCheck.bind(cdr);
		this.subscription = new Subscription();
		this.subscription.add(this.control.valueChanges.subscribe(markForCheck));
		this.subscription.add(this.control.statusChanges.subscribe(markForCheck));
		(_this$resetSubscripti2 = this.resetSubscription) === null || _this$resetSubscripti2 === void 0 || _this$resetSubscripti2.unsubscribe();
		this.resetSubscription = void 0;
		if (this.userOnReset) {
			this.resetSubscription = this.control.events.subscribe((event) => {
				if (event instanceof FormResetEvent && this.control) {
					var _this$userOnReset2;
					(_this$userOnReset2 = this.userOnReset) === null || _this$userOnReset2 === void 0 || _this$userOnReset2.call(this, this.control.value);
				}
			});
			this.subscription.add(this.resetSubscription);
		}
		if (this.parseErrorsValidator) this.control.addValidators(this.parseErrorsValidator);
	}
	ngControlCreate(host) {
		var _host$nativeElement$h, _host$nativeElement;
		if (!((_host$nativeElement$h = (_host$nativeElement = host.nativeElement).hasAttribute) === null || _host$nativeElement$h === void 0 ? void 0 : _host$nativeElement$h.call(_host$nativeElement, "ngNoCva")) && (this.rawValueAccessors && this.rawValueAccessors.length > 0 || this.valueAccessor !== null) || !host.customControl) return;
		this.isCustomControlBased = true;
		host.listenToCustomControlModel((value) => {
			var _this$control2, _this$control3;
			(_this$control2 = this.control) === null || _this$control2 === void 0 || _this$control2.markAsDirty();
			(_this$control3 = this.control) === null || _this$control3 === void 0 || _this$control3.setValue(value, { emitModelToViewChange: false });
			this.viewToModelUpdate(value);
		});
		host.listenToCustomControlOutput("touch", () => {
			var _this$control4;
			(_this$control4 = this.control) === null || _this$control4 === void 0 || _this$control4.markAsTouched();
		});
		this.customControlBindings = {};
		this.isNativeFormElement = isNativeFormElement(host.nativeElement);
		this.requiredValidatorViaDi = this._rawValidators.find((v) => v instanceof RequiredValidator);
	}
	ngControlUpdate(host, bindRequired) {
		if (!this.isCustomControlBased) return;
		const control = this.control;
		const bindings = this.customControlBindings;
		if (!Object.is(bindings.value, control.value)) {
			bindings.value = control.value;
			host.setCustomControlModelInput(control.value);
		}
		this.bindControlProperty(host, bindings, "touched", control.touched);
		this.bindControlProperty(host, bindings, "dirty", control.dirty);
		this.bindControlProperty(host, bindings, "valid", control.valid);
		this.bindControlProperty(host, bindings, "invalid", control.invalid);
		this.bindControlProperty(host, bindings, "pending", control.pending);
		this.bindControlProperty(host, bindings, "disabled", control.disabled);
		if (this.shouldBindRequired) this.bindControlProperty(host, bindings, "required", this.isRequired);
		const errorObject = control.errors;
		if (bindings.errors !== errorObject) {
			bindings.errors = errorObject;
			const errorArray = this._convertErrors(errorObject);
			host.setInputOnDirectives("errors", errorArray);
		}
	}
	get isRequired() {
		var _ref2, _this$requiredValidat, _this$control5;
		return (_ref2 = ((_this$requiredValidat = this.requiredValidatorViaDi) === null || _this$requiredValidat === void 0 ? void 0 : _this$requiredValidat._enabled) || ((_this$control5 = this.control) === null || _this$control5 === void 0 ? void 0 : _this$control5._hasRequired())) !== null && _ref2 !== void 0 ? _ref2 : false;
	}
	get shouldBindRequired() {
		return true;
	}
	bindControlProperty(host, bindings, name, value) {
		if (bindings[name] === value) return;
		bindings[name] = value;
		const wasSet = host.setInputOnDirectives(name, value);
		if (this.isNativeFormElement && !wasSet && (name === "disabled" || name === "required") && this.renderer) setNativeDomProperty(this.renderer, host.nativeElement, name, value);
	}
	_convertErrors(errors) {
		if (errors === null) return [];
		const control = this.control;
		return Object.entries(errors).map(([kind, context]) => {
			return new ReactiveValidationError({
				context,
				kind,
				control
			});
		});
	}
	setParseErrorSource(parseErrors) {
		if (parseErrors === void 0) return;
		let convertedErrors = null;
		const convertedParseErrors = computed(() => {
			const rawErrors = parseErrors();
			if (rawErrors.length === 0) return null;
			return rawErrors.reduce((acc, err) => {
				acc[err.kind] = err;
				return acc;
			}, {});
		}, ...ngDevMode ? [{ debugName: "convertedParseErrors" }] : []);
		this.parseErrorsValidator = (() => convertedErrors).bind(this);
		effect(() => {
			var _this$control6;
			convertedErrors = convertedParseErrors();
			(_this$control6 = this.control) === null || _this$control6 === void 0 || _this$control6.updateValueAndValidity({ emitEvent: false });
		}, { injector: this.injector });
	}
	removeParseErrorsValidator(control) {
		if (this.parseErrorsValidator) {
			control === null || control === void 0 || control.removeValidators(this.parseErrorsValidator);
			control === null || control === void 0 || control.updateValueAndValidity({ emitEvent: false });
		}
	}
};
var AbstractControlStatus = class {
	constructor(cd) {
		_defineProperty(this, "_cd", void 0);
		this._cd = cd;
	}
	get isTouched() {
		var _this$_cd, _this$_cd$_touched, _this$_cd2;
		(_this$_cd = this._cd) === null || _this$_cd === void 0 || (_this$_cd = _this$_cd.control) === null || _this$_cd === void 0 || (_this$_cd$_touched = _this$_cd._touched) === null || _this$_cd$_touched === void 0 || _this$_cd$_touched.call(_this$_cd);
		return !!((_this$_cd2 = this._cd) === null || _this$_cd2 === void 0 || (_this$_cd2 = _this$_cd2.control) === null || _this$_cd2 === void 0 ? void 0 : _this$_cd2.touched);
	}
	get isUntouched() {
		var _this$_cd3;
		return !!((_this$_cd3 = this._cd) === null || _this$_cd3 === void 0 || (_this$_cd3 = _this$_cd3.control) === null || _this$_cd3 === void 0 ? void 0 : _this$_cd3.untouched);
	}
	get isPristine() {
		var _this$_cd4, _this$_cd4$_pristine, _this$_cd5;
		(_this$_cd4 = this._cd) === null || _this$_cd4 === void 0 || (_this$_cd4 = _this$_cd4.control) === null || _this$_cd4 === void 0 || (_this$_cd4$_pristine = _this$_cd4._pristine) === null || _this$_cd4$_pristine === void 0 || _this$_cd4$_pristine.call(_this$_cd4);
		return !!((_this$_cd5 = this._cd) === null || _this$_cd5 === void 0 || (_this$_cd5 = _this$_cd5.control) === null || _this$_cd5 === void 0 ? void 0 : _this$_cd5.pristine);
	}
	get isDirty() {
		var _this$_cd6;
		return !!((_this$_cd6 = this._cd) === null || _this$_cd6 === void 0 || (_this$_cd6 = _this$_cd6.control) === null || _this$_cd6 === void 0 ? void 0 : _this$_cd6.dirty);
	}
	get isValid() {
		var _this$_cd7, _this$_cd7$_status, _this$_cd8;
		(_this$_cd7 = this._cd) === null || _this$_cd7 === void 0 || (_this$_cd7 = _this$_cd7.control) === null || _this$_cd7 === void 0 || (_this$_cd7$_status = _this$_cd7._status) === null || _this$_cd7$_status === void 0 || _this$_cd7$_status.call(_this$_cd7);
		return !!((_this$_cd8 = this._cd) === null || _this$_cd8 === void 0 || (_this$_cd8 = _this$_cd8.control) === null || _this$_cd8 === void 0 ? void 0 : _this$_cd8.valid);
	}
	get isInvalid() {
		var _this$_cd9;
		return !!((_this$_cd9 = this._cd) === null || _this$_cd9 === void 0 || (_this$_cd9 = _this$_cd9.control) === null || _this$_cd9 === void 0 ? void 0 : _this$_cd9.invalid);
	}
	get isPending() {
		var _this$_cd10;
		return !!((_this$_cd10 = this._cd) === null || _this$_cd10 === void 0 || (_this$_cd10 = _this$_cd10.control) === null || _this$_cd10 === void 0 ? void 0 : _this$_cd10.pending);
	}
	get isSubmitted() {
		var _this$_cd11, _this$_cd11$_submitte, _this$_cd12;
		(_this$_cd11 = this._cd) === null || _this$_cd11 === void 0 || (_this$_cd11$_submitte = _this$_cd11._submitted) === null || _this$_cd11$_submitte === void 0 || _this$_cd11$_submitte.call(_this$_cd11);
		return !!((_this$_cd12 = this._cd) === null || _this$_cd12 === void 0 ? void 0 : _this$_cd12.submitted);
	}
};
var ngControlStatusHost = {
	"[class.ng-untouched]": "isUntouched",
	"[class.ng-touched]": "isTouched",
	"[class.ng-pristine]": "isPristine",
	"[class.ng-dirty]": "isDirty",
	"[class.ng-valid]": "isValid",
	"[class.ng-invalid]": "isInvalid",
	"[class.ng-pending]": "isPending"
};
var NgControlStatus = class extends AbstractControlStatus {
	constructor(cd) {
		super(cd);
	}
};
_NgControlStatus = NgControlStatus;
_defineProperty(NgControlStatus, "ɵfac", function NgControlStatus_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgControlStatus)(ɵɵdirectiveInject(NgControl, 2));
});
_defineProperty(NgControlStatus, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _NgControlStatus,
	selectors: [
		[
			"",
			"formControlName",
			""
		],
		[
			"",
			"ngModel",
			""
		],
		[
			"",
			"formControl",
			""
		]
	],
	hostVars: 14,
	hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵclassProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
	},
	standalone: false,
	features: [ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
		type: Directive,
		args: [{
			selector: "[formControlName],[ngModel],[formControl]",
			host: ngControlStatusHost,
			standalone: false
		}]
	}], () => [{
		type: NgControl,
		decorators: [{ type: Self }]
	}], null);
})();
var NgControlStatusGroup = class extends AbstractControlStatus {
	constructor(cd) {
		super(cd);
	}
};
_NgControlStatusGroup = NgControlStatusGroup;
_defineProperty(NgControlStatusGroup, "ɵfac", function NgControlStatusGroup_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgControlStatusGroup)(ɵɵdirectiveInject(ControlContainer, 10));
});
_defineProperty(NgControlStatusGroup, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _NgControlStatusGroup,
	selectors: [
		[
			"",
			"formGroupName",
			""
		],
		[
			"",
			"formArrayName",
			""
		],
		[
			"",
			"ngModelGroup",
			""
		],
		[
			"",
			"formGroup",
			""
		],
		[
			"",
			"formArray",
			""
		],
		[
			"form",
			3,
			"ngNoForm",
			""
		],
		[
			"",
			"ngForm",
			""
		]
	],
	hostVars: 16,
	hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵclassProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
	},
	standalone: false,
	features: [ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
		type: Directive,
		args: [{
			selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]",
			host: _objectSpread2(_objectSpread2({}, ngControlStatusHost), {}, { "[class.ng-submitted]": "isSubmitted" }),
			standalone: false
		}]
	}], () => [{
		type: ControlContainer,
		decorators: [{ type: Optional }, { type: Self }]
	}], null);
})();
var FormGroup = class extends AbstractControl {
	constructor(controls, validatorOrOpts, asyncValidator) {
		super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
		_defineProperty(this, "controls", void 0);
		(typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
		this.controls = controls;
		this._initObservables();
		this._setUpdateStrategy(validatorOrOpts);
		this._setUpControls();
		this.updateValueAndValidity({
			onlySelf: true,
			emitEvent: !!this.asyncValidator
		});
	}
	registerControl(name, control) {
		const existingControl = this._find(name);
		if (existingControl) return existingControl;
		this.controls[name] = control;
		control.setParent(this);
		control._registerOnCollectionChange(this._onCollectionChange);
		return control;
	}
	addControl(name, control, options = {}) {
		this.registerControl(name, control);
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
		this._onCollectionChange();
	}
	removeControl(name, options = {}) {
		const existingControl = this._find(name);
		if (existingControl) existingControl._registerOnCollectionChange(() => {});
		delete this.controls[name];
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
		this._onCollectionChange();
	}
	setControl(name, control, options = {}) {
		const existingControl = this._find(name);
		if (existingControl) existingControl._registerOnCollectionChange(() => {});
		delete this.controls[name];
		if (control) this.registerControl(name, control);
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
		this._onCollectionChange();
	}
	contains(controlName) {
		var _this$_find;
		return ((_this$_find = this._find(controlName)) === null || _this$_find === void 0 ? void 0 : _this$_find.enabled) === true;
	}
	setValue(value, options = {}) {
		untracked(() => {
			assertAllValuesPresent(this, true, value);
			Object.keys(value).forEach((name) => {
				assertControlPresent(this, true, name);
				this.controls[name].setValue(value[name], {
					onlySelf: true,
					emitEvent: options.emitEvent
				});
			});
			this.updateValueAndValidity(options);
		});
	}
	patchValue(value, options = {}) {
		if (value == null) return;
		Object.keys(value).forEach((name) => {
			const existingControl = this._find(name);
			if (existingControl) existingControl.patchValue(value[name], {
				onlySelf: true,
				emitEvent: options.emitEvent
			});
		});
		this.updateValueAndValidity(options);
	}
	reset(value = {}, options = {}) {
		this._forEachChild((control, name) => {
			control.reset(value ? value[name] : null, _objectSpread2(_objectSpread2({}, options), {}, { onlySelf: true }));
		});
		this._updatePristine(options, this);
		this._updateTouched(options, this);
		this.updateValueAndValidity(options);
		if ((options === null || options === void 0 ? void 0 : options.emitEvent) !== false) this._events.next(new FormResetEvent(this));
	}
	getRawValue() {
		return this._reduceChildren({}, (acc, control, name) => {
			acc[name] = control.getRawValue();
			return acc;
		});
	}
	_syncPendingControls() {
		let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
			return child._syncPendingControls() ? true : updated;
		});
		if (subtreeUpdated) this.updateValueAndValidity({ onlySelf: true });
		return subtreeUpdated;
	}
	_forEachChild(cb) {
		Object.keys(this.controls).forEach((key) => {
			const control = this.controls[key];
			control && cb(control, key);
		});
	}
	_setUpControls() {
		this._forEachChild((control) => {
			control.setParent(this);
			control._registerOnCollectionChange(this._onCollectionChange);
		});
	}
	_updateValue() {
		this.value = this._reduceValue();
	}
	_anyControls(condition) {
		for (const [controlName, control] of Object.entries(this.controls)) if (this.contains(controlName) && condition(control)) return true;
		return false;
	}
	_reduceValue() {
		return this._reduceChildren({}, (acc, control, name) => {
			if (control.enabled || this.disabled) acc[name] = control.value;
			return acc;
		});
	}
	_reduceChildren(initValue, fn) {
		let res = initValue;
		this._forEachChild((control, name) => {
			res = fn(res, control, name);
		});
		return res;
	}
	_allControlsDisabled() {
		for (const controlName of Object.keys(this.controls)) if (this.controls[controlName].enabled) return false;
		return Object.keys(this.controls).length > 0 || this.disabled;
	}
	_find(name) {
		return hasOwnControl(this.controls, name) ? this.controls[name] : null;
	}
};
function validateFormGroupControls(controls) {
	const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
	if (invalidKeys.length > 0) console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
}
var FormRecord = class extends FormGroup {};
var formDirectiveProvider$2 = {
	provide: ControlContainer,
	useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class extends ControlContainer {
	get submitted() {
		return untracked(this.submittedReactive);
	}
	constructor(validators, asyncValidators, callSetDisabledState) {
		super();
		_defineProperty(this, "callSetDisabledState", void 0);
		_defineProperty(this, "_submitted", computed(() => this.submittedReactive(), ...ngDevMode ? [{ debugName: "_submitted" }] : []));
		_defineProperty(this, "submittedReactive", signal(false, ...ngDevMode ? [{ debugName: "submittedReactive" }] : []));
		_defineProperty(this, "_directives", /* @__PURE__ */ new Set());
		_defineProperty(this, "form", void 0);
		_defineProperty(this, "ngSubmit", new EventEmitter());
		_defineProperty(this, "options", void 0);
		this.callSetDisabledState = callSetDisabledState;
		this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	}
	ngAfterViewInit() {
		this._setUpdateStrategy();
	}
	get formDirective() {
		return this;
	}
	get control() {
		return this.form;
	}
	get path() {
		return [];
	}
	get controls() {
		return this.form.controls;
	}
	addControl(dir) {
		resolvedPromise$1.then(() => {
			dir.control = this._findContainer(dir.path).registerControl(dir.name, dir.control);
			dir._setupWithForm(this.callSetDisabledState);
			dir.control.updateValueAndValidity({ emitEvent: false });
			this._directives.add(dir);
		});
	}
	getControl(dir) {
		return this.form.get(dir.path);
	}
	removeControl(dir) {
		resolvedPromise$1.then(() => {
			const container = this._findContainer(dir.path);
			container === null || container === void 0 || container.removeControl(dir.name);
			this._directives.delete(dir);
		});
	}
	addFormGroup(dir) {
		resolvedPromise$1.then(() => {
			const container = this._findContainer(dir.path);
			const group = new FormGroup({});
			setUpFormContainer(group, dir);
			container.registerControl(dir.name, group);
			group.updateValueAndValidity({ emitEvent: false });
		});
	}
	removeFormGroup(dir) {
		resolvedPromise$1.then(() => {
			var _container$removeCont;
			const container = this._findContainer(dir.path);
			container === null || container === void 0 || (_container$removeCont = container.removeControl) === null || _container$removeCont === void 0 || _container$removeCont.call(container, dir.name);
		});
	}
	getFormGroup(dir) {
		return this.form.get(dir.path);
	}
	updateModel(dir, value) {
		resolvedPromise$1.then(() => {
			this.form.get(dir.path).setValue(value);
		});
	}
	setValue(value) {
		this.control.setValue(value);
	}
	onSubmit($event) {
		var _$event$target;
		this.submittedReactive.set(true);
		syncPendingControls(this.form, this._directives);
		this.ngSubmit.emit($event);
		this.form._events.next(new FormSubmittedEvent(this.control));
		return ($event === null || $event === void 0 || (_$event$target = $event.target) === null || _$event$target === void 0 ? void 0 : _$event$target.method) === "dialog";
	}
	onReset() {
		this.resetForm();
	}
	resetForm(value = void 0) {
		this.form.reset(value);
		this.submittedReactive.set(false);
	}
	_setUpdateStrategy() {
		if (this.options && this.options.updateOn != null) this.form._updateOn = this.options.updateOn;
	}
	_findContainer(path) {
		path.pop();
		return path.length ? this.form.get(path) : this.form;
	}
};
_NgForm = NgForm;
_defineProperty(NgForm, "ɵfac", function NgForm_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgForm)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
});
_defineProperty(NgForm, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _NgForm,
	selectors: [
		[
			"form",
			3,
			"ngNoForm",
			"",
			3,
			"formGroup",
			"",
			3,
			"formArray",
			""
		],
		["ng-form"],
		[
			"",
			"ngForm",
			""
		]
	],
	hostBindings: function NgForm_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("submit", function NgForm_submit_HostBindingHandler($event) {
			return ctx.onSubmit($event);
		})("reset", function NgForm_reset_HostBindingHandler() {
			return ctx.onReset();
		});
	},
	inputs: { options: [
		0,
		"ngFormOptions",
		"options"
	] },
	outputs: { ngSubmit: "ngSubmit" },
	exportAs: ["ngForm"],
	standalone: false,
	features: [ɵɵProvidersFeature([formDirectiveProvider$2]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
		type: Directive,
		args: [{
			selector: "form:not([ngNoForm]):not([formGroup]):not([formArray]),ng-form,[ngForm]",
			providers: [formDirectiveProvider$2],
			host: {
				"(submit)": "onSubmit($event)",
				"(reset)": "onReset()"
			},
			outputs: ["ngSubmit"],
			exportAs: "ngForm",
			standalone: false
		}]
	}], () => [
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [CALL_SET_DISABLED_STATE]
			}]
		}
	], { options: [{
		type: Input,
		args: ["ngFormOptions"]
	}] });
})();
function removeListItem(list, el) {
	const index = list.indexOf(el);
	if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
	return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl extends AbstractControl {
	constructor(formState = null, validatorOrOpts, asyncValidator) {
		super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
		_defineProperty(this, "defaultValue", null);
		_defineProperty(this, "_onChange", []);
		_defineProperty(this, "_pendingValue", void 0);
		_defineProperty(this, "_pendingChange", false);
		this._applyFormState(formState);
		this._setUpdateStrategy(validatorOrOpts);
		this._initObservables();
		this.updateValueAndValidity({
			onlySelf: true,
			emitEvent: !!this.asyncValidator
		});
		if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
			if (isFormControlState(formState)) this.defaultValue = formState.value;
			else this.defaultValue = formState;
		}
	}
	setValue(value, options = {}) {
		untracked(() => {
			this.value = this._pendingValue = value;
			if (this._onChange.length && options.emitModelToViewChange !== false) this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
			this.updateValueAndValidity(options);
		});
	}
	patchValue(value, options = {}) {
		this.setValue(value, options);
	}
	reset(formState = this.defaultValue, options = {}) {
		this._applyFormState(formState);
		this.markAsPristine(options);
		this.markAsUntouched(options);
		this.setValue(this.value, options);
		if (options.overwriteDefaultValue) this.defaultValue = this.value;
		this._pendingChange = false;
		if ((options === null || options === void 0 ? void 0 : options.emitEvent) !== false) this._events.next(new FormResetEvent(this));
	}
	_updateValue() {}
	_anyControls(condition) {
		return false;
	}
	_allControlsDisabled() {
		return this.disabled;
	}
	registerOnChange(fn) {
		this._onChange.push(fn);
	}
	_unregisterOnChange(fn) {
		removeListItem(this._onChange, fn);
	}
	registerOnDisabledChange(fn) {
		this._onDisabledChange.push(fn);
	}
	_unregisterOnDisabledChange(fn) {
		removeListItem(this._onDisabledChange, fn);
	}
	_forEachChild(cb) {}
	_syncPendingControls() {
		if (this.updateOn === "submit") {
			if (this._pendingDirty) this.markAsDirty();
			if (this._pendingTouched) this.markAsTouched();
			if (this._pendingChange) {
				this.setValue(this._pendingValue, {
					onlySelf: true,
					emitModelToViewChange: false
				});
				return true;
			}
		}
		return false;
	}
	_applyFormState(formState) {
		if (isFormControlState(formState)) {
			this.value = this._pendingValue = formState.value;
			formState.disabled ? this.disable({
				onlySelf: true,
				emitEvent: false
			}) : this.enable({
				onlySelf: true,
				emitEvent: false
			});
		} else this.value = this._pendingValue = formState;
	}
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class extends ControlContainer {
	constructor(..._args10) {
		super(..._args10);
		_defineProperty(this, "_parent", void 0);
	}
	ngOnInit() {
		this._checkParentType();
		this.formDirective.addFormGroup(this);
	}
	ngOnDestroy() {
		var _this$formDirective;
		(_this$formDirective = this.formDirective) === null || _this$formDirective === void 0 || _this$formDirective.removeFormGroup(this);
	}
	get control() {
		return this.formDirective.getFormGroup(this);
	}
	get path() {
		return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
	}
	get formDirective() {
		return this._parent ? this._parent.formDirective : null;
	}
	_checkParentType() {}
};
_AbstractFormGroupDirective = AbstractFormGroupDirective;
_defineProperty(AbstractFormGroupDirective, "ɵfac", /*@__PURE__*/ (() => {
	let ɵAbstractFormGroupDirective_BaseFactory = void 0;
	return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
		return (ɵAbstractFormGroupDirective_BaseFactory || (ɵAbstractFormGroupDirective_BaseFactory = ɵɵgetInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
	};
})());
_defineProperty(AbstractFormGroupDirective, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _AbstractFormGroupDirective,
	standalone: false,
	features: [ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
		type: Directive,
		args: [{ standalone: false }]
	}], null, null);
})();
function modelParentException() {
	return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
	return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function ngModelInChildComponentWarning(containerTypeName) {
	return formatRuntimeError(-1354, `ngModel on a form control inside a child component cannot register with the ${containerTypeName} in the parent component because @Host() stops injection at the component boundary. To register this control with the parent form, add viewProviders to the child component: @Component({ ..., viewProviders: [{ provide: ControlContainer, useExisting: ${containerTypeName} }] }). Or, to opt out of form registration, use [ngModelOptions]="{standalone: true}".`);
}
function missingNameException() {
	return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
	return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
	provide: ControlContainer,
	useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class NgModelGroup extends AbstractFormGroupDirective {
	constructor(parent, validators, asyncValidators) {
		super();
		_defineProperty(this, "name", "");
		this._parent = parent;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	_checkParentType() {
		if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) throw modelGroupParentException();
	}
};
_NgModelGroup = NgModelGroup;
_defineProperty(NgModelGroup, "ɵfac", function NgModelGroup_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgModelGroup)(ɵɵdirectiveInject(ControlContainer, 5), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
});
_defineProperty(NgModelGroup, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _NgModelGroup,
	selectors: [[
		"",
		"ngModelGroup",
		""
	]],
	inputs: { name: [
		0,
		"ngModelGroup",
		"name"
	] },
	exportAs: ["ngModelGroup"],
	standalone: false,
	features: [ɵɵProvidersFeature([modelGroupProvider]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
		type: Directive,
		args: [{
			selector: "[ngModelGroup]",
			providers: [modelGroupProvider],
			exportAs: "ngModelGroup",
			standalone: false
		}]
	}], () => [
		{
			type: ControlContainer,
			decorators: [{ type: Host }, { type: SkipSelf }]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		}
	], { name: [{
		type: Input,
		args: ["ngModelGroup"]
	}] });
})();
var AbstractFormDirective = class extends ControlContainer {
	get submitted() {
		return untracked(this._submittedReactive);
	}
	set submitted(value) {
		this._submittedReactive.set(value);
	}
	constructor(validators, asyncValidators, callSetDisabledState) {
		super();
		_defineProperty(this, "callSetDisabledState", void 0);
		_defineProperty(this, "_submitted", computed(() => this._submittedReactive(), ...ngDevMode ? [{ debugName: "_submitted" }] : []));
		_defineProperty(this, "_submittedReactive", signal(false, ...ngDevMode ? [{ debugName: "_submittedReactive" }] : []));
		_defineProperty(this, "_oldForm", void 0);
		_defineProperty(this, "_onCollectionChange", () => this._updateDomValue());
		_defineProperty(this, "directives", []);
		this.callSetDisabledState = callSetDisabledState;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	ngOnChanges(changes) {
		this.onChanges(changes);
	}
	ngOnDestroy() {
		this.onDestroy();
	}
	onChanges(changes) {
		this._checkFormPresent();
		if (Object.hasOwn(changes, "form")) {
			this._updateValidators();
			this._updateDomValue();
			this._updateRegistrations();
			this._oldForm = this.form;
		}
	}
	onDestroy() {
		if (this.form) {
			cleanUpValidators(this.form, this);
			if (this.form._onCollectionChange === this._onCollectionChange) this.form._registerOnCollectionChange(() => {});
		}
	}
	get formDirective() {
		return this;
	}
	get path() {
		return [];
	}
	addControl(dir) {
		const ctrl = this.form.get(dir.path);
		dir._setupWithForm(ctrl, this.callSetDisabledState);
		ctrl.updateValueAndValidity({ emitEvent: false });
		this.directives.push(dir);
		return ctrl;
	}
	getControl(dir) {
		return this.form.get(dir.path);
	}
	removeControl(dir) {
		cleanUpControl(dir.control || null, dir, false);
		removeListItem$1(this.directives, dir);
	}
	addFormGroup(dir) {
		this._setUpFormContainer(dir);
	}
	removeFormGroup(dir) {
		this._cleanUpFormContainer(dir);
	}
	getFormGroup(dir) {
		return this.form.get(dir.path);
	}
	getFormArray(dir) {
		return this.form.get(dir.path);
	}
	addFormArray(dir) {
		this._setUpFormContainer(dir);
	}
	removeFormArray(dir) {
		this._cleanUpFormContainer(dir);
	}
	updateModel(dir, value) {
		this.form.get(dir.path).setValue(value);
	}
	onReset() {
		this.resetForm();
	}
	resetForm(value = void 0, options = {}) {
		this.form.reset(value, options);
		this._submittedReactive.set(false);
	}
	onSubmit($event) {
		var _$event$target2;
		this.submitted = true;
		syncPendingControls(this.form, this.directives);
		this.ngSubmit.emit($event);
		this.form._events.next(new FormSubmittedEvent(this.control));
		return ($event === null || $event === void 0 || (_$event$target2 = $event.target) === null || _$event$target2 === void 0 ? void 0 : _$event$target2.method) === "dialog";
	}
	_updateDomValue() {
		this.directives.forEach((dir) => {
			const oldCtrl = dir.control;
			const newCtrl = this.form.get(dir.path);
			if (oldCtrl !== newCtrl) {
				cleanUpControl(oldCtrl || null, dir);
				if (isFormControl(newCtrl)) dir._setupWithForm(newCtrl, this.callSetDisabledState);
			}
		});
		this.form._updateTreeValidity({ emitEvent: false });
	}
	_setUpFormContainer(dir) {
		const ctrl = this.form.get(dir.path);
		setUpFormContainer(ctrl, dir);
		ctrl.updateValueAndValidity({ emitEvent: false });
	}
	_cleanUpFormContainer(dir) {
		var _this$form;
		const ctrl = (_this$form = this.form) === null || _this$form === void 0 ? void 0 : _this$form.get(dir.path);
		if (ctrl) {
			if (cleanUpFormContainer(ctrl, dir)) ctrl.updateValueAndValidity({ emitEvent: false });
		}
	}
	_updateRegistrations() {
		var _this$_oldForm;
		this.form._registerOnCollectionChange(this._onCollectionChange);
		(_this$_oldForm = this._oldForm) === null || _this$_oldForm === void 0 || _this$_oldForm._registerOnCollectionChange(() => {});
	}
	_updateValidators() {
		setUpValidators(this.form, this);
		if (this._oldForm) cleanUpValidators(this._oldForm, this);
	}
	_checkFormPresent() {
		if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) throw missingFormException();
	}
};
_AbstractFormDirective = AbstractFormDirective;
_defineProperty(AbstractFormDirective, "ɵfac", function AbstractFormDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _AbstractFormDirective)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
});
_defineProperty(AbstractFormDirective, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _AbstractFormDirective,
	features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormDirective, [{ type: Directive }], () => [
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [CALL_SET_DISABLED_STATE]
			}]
		}
	], null);
})();
var formDirectiveProvider$1 = {
	provide: ControlContainer,
	useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class extends AbstractFormDirective {
	constructor(..._args11) {
		super(..._args11);
		_defineProperty(this, "form", null);
		_defineProperty(this, "ngSubmit", new EventEmitter());
	}
	get control() {
		return this.form;
	}
};
_FormGroupDirective = FormGroupDirective;
_defineProperty(FormGroupDirective, "ɵfac", /*@__PURE__*/ (() => {
	let ɵFormGroupDirective_BaseFactory = void 0;
	return function FormGroupDirective_Factory(__ngFactoryType__) {
		return (ɵFormGroupDirective_BaseFactory || (ɵFormGroupDirective_BaseFactory = ɵɵgetInheritedFactory(_FormGroupDirective)))(__ngFactoryType__ || _FormGroupDirective);
	};
})());
_defineProperty(FormGroupDirective, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _FormGroupDirective,
	selectors: [[
		"",
		"formGroup",
		""
	]],
	hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
			return ctx.onSubmit($event);
		})("reset", function FormGroupDirective_reset_HostBindingHandler() {
			return ctx.onReset();
		});
	},
	inputs: { form: [
		0,
		"formGroup",
		"form"
	] },
	outputs: { ngSubmit: "ngSubmit" },
	exportAs: ["ngForm"],
	standalone: false,
	features: [ɵɵProvidersFeature([formDirectiveProvider$1]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
		type: Directive,
		args: [{
			selector: "[formGroup]",
			providers: [formDirectiveProvider$1],
			host: {
				"(submit)": "onSubmit($event)",
				"(reset)": "onReset()"
			},
			exportAs: "ngForm",
			standalone: false
		}]
	}], null, {
		form: [{
			type: Input,
			args: ["formGroup"]
		}],
		ngSubmit: [{ type: Output }]
	});
})();
var formControlBinding$1 = {
	provide: NgControl,
	useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class extends NgControl {
	constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState, injector, renderer) {
		super(injector, renderer, valueAccessors);
		_defineProperty(this, "_changeDetectorRef", void 0);
		_defineProperty(this, "callSetDisabledState", void 0);
		_defineProperty(this, "control", new FormControl());
		_defineProperty(this, "_registered", false);
		_defineProperty(this, "_ngModelInjector", void 0);
		_defineProperty(this, "viewModel", void 0);
		_defineProperty(this, "name", "");
		_defineProperty(this, "isDisabled", void 0);
		_defineProperty(this, "model", void 0);
		_defineProperty(this, "options", void 0);
		_defineProperty(this, "update", new EventEmitter());
		this._changeDetectorRef = _changeDetectorRef;
		this.callSetDisabledState = callSetDisabledState;
		this._parent = parent;
		if (typeof ngDevMode === "undefined" || ngDevMode) this._ngModelInjector = injector;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	ngOnChanges(changes) {
		var _this$options;
		if (!this._registered && (typeof ngDevMode === "undefined" || ngDevMode) && this._parent === null && !((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.standalone)) {
			var _this$_ngModelInjecto;
			const parentContainer = (_this$_ngModelInjecto = this._ngModelInjector) === null || _this$_ngModelInjecto === void 0 ? void 0 : _this$_ngModelInjecto.get(ControlContainer, null);
			if (parentContainer != null) {
				const typeName = parentContainer instanceof NgForm ? "NgForm" : parentContainer instanceof FormGroupDirective ? "FormGroupDirective" : parentContainer instanceof NgModelGroup ? "NgModelGroup" : parentContainer.constructor.name || "ControlContainer";
				console.warn(ngModelInChildComponentWarning(typeName));
			}
		}
		this._checkForErrors();
		if (!this._registered || "name" in changes) {
			if (this._registered) {
				this._checkName();
				if (this.formDirective) {
					const oldName = changes["name"].previousValue;
					this.formDirective.removeControl({
						name: oldName,
						path: this._getPath(oldName)
					});
				}
			}
			this._setUpControl();
		}
		if ("isDisabled" in changes) this._updateDisabled(changes);
		if (isPropertyUpdated(changes, this.viewModel)) {
			this._updateValue(this.model);
			this.viewModel = this.model;
		}
	}
	ngOnDestroy() {
		var _this$formDirective2;
		(_this$formDirective2 = this.formDirective) === null || _this$formDirective2 === void 0 || _this$formDirective2.removeControl(this);
	}
	ɵngControlCreate(host) {
		super.ngControlCreate(host);
	}
	ɵngControlUpdate(host) {
		super.ngControlUpdate(host, false);
	}
	get shouldBindRequired() {
		return false;
	}
	get path() {
		return this._getPath(this.name);
	}
	get formDirective() {
		return this._parent ? this._parent.formDirective : null;
	}
	viewToModelUpdate(newValue) {
		this.viewModel = newValue;
		this.update.emit(newValue);
	}
	_setUpControl() {
		this._setUpdateStrategy();
		this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
		this._registered = true;
	}
	_setUpdateStrategy() {
		if (this.options && this.options.updateOn != null) this.control._updateOn = this.options.updateOn;
	}
	_isStandalone() {
		return !this._parent || !!(this.options && this.options.standalone);
	}
	_setUpStandalone() {
		if (!this.isCustomControlBased) {
			var _this$valueAccessor;
			(_this$valueAccessor = this.valueAccessor) !== null && _this$valueAccessor !== void 0 || (this.valueAccessor = this.selectedValueAccessor);
			setUpControlValueAccessor(this.control, this, this.callSetDisabledState);
		} else this.setupCustomControl();
		this.control.updateValueAndValidity({ emitEvent: false });
	}
	_setupWithForm(callSetDisabledState) {
		if (!this.isCustomControlBased) {
			var _this$valueAccessor2;
			(_this$valueAccessor2 = this.valueAccessor) !== null && _this$valueAccessor2 !== void 0 || (this.valueAccessor = this.selectedValueAccessor);
			setUpControlValueAccessor(this.control, this, callSetDisabledState);
		} else this.setupCustomControl();
	}
	_checkForErrors() {
		if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) checkParentType$1(this._parent);
		this._checkName();
	}
	_checkName() {
		if (this.options && this.options.name) this.name = this.options.name;
		if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) throw missingNameException();
	}
	_updateValue(value) {
		resolvedPromise.then(() => {
			var _this$_changeDetector;
			this.control.setValue(value, { emitViewToModelChange: false });
			(_this$_changeDetector = this._changeDetectorRef) === null || _this$_changeDetector === void 0 || _this$_changeDetector.markForCheck();
		});
	}
	_updateDisabled(changes) {
		const disabledValue = changes["isDisabled"].currentValue;
		const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
		resolvedPromise.then(() => {
			var _this$_changeDetector2;
			if (isDisabled && !this.control.disabled) this.control.disable();
			else if (!isDisabled && this.control.disabled) this.control.enable();
			(_this$_changeDetector2 = this._changeDetectorRef) === null || _this$_changeDetector2 === void 0 || _this$_changeDetector2.markForCheck();
		});
	}
	_getPath(controlName) {
		return this._parent ? controlPath(controlName, this._parent) : [controlName];
	}
};
_NgModel = NgModel;
_defineProperty(NgModel, "ngAcceptInputType_isDisabled", void 0);
_defineProperty(NgModel, "ɵfac", function NgModel_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgModel)(ɵɵdirectiveInject(ControlContainer, 9), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(ChangeDetectorRef, 8), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8), ɵɵdirectiveInject(Injector, 8), ɵɵdirectiveInject(Renderer2, 8));
});
_defineProperty(NgModel, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _NgModel,
	selectors: [[
		"",
		"ngModel",
		"",
		3,
		"formControlName",
		"",
		3,
		"formControl",
		""
	]],
	inputs: {
		name: "name",
		isDisabled: [
			0,
			"disabled",
			"isDisabled"
		],
		model: [
			0,
			"ngModel",
			"model"
		],
		options: [
			0,
			"ngModelOptions",
			"options"
		]
	},
	outputs: { update: "ngModelChange" },
	exportAs: ["ngModel"],
	standalone: false,
	features: [
		ɵɵProvidersFeature([formControlBinding$1, NG_CONTROL_INTEGRATION_PROVIDER]),
		ɵɵInheritDefinitionFeature,
		ɵɵNgOnChangesFeature,
		ɵɵControlFeature(null)
	]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
		type: Directive,
		args: [{
			selector: "[ngModel]:not([formControlName]):not([formControl])",
			providers: [formControlBinding$1, NG_CONTROL_INTEGRATION_PROVIDER],
			exportAs: "ngModel",
			standalone: false
		}]
	}], () => [
		{
			type: ControlContainer,
			decorators: [{ type: Optional }, { type: Host }]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALUE_ACCESSOR]
				}
			]
		},
		{
			type: ChangeDetectorRef,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [ChangeDetectorRef]
			}]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [CALL_SET_DISABLED_STATE]
			}]
		},
		{
			type: Injector,
			decorators: [{ type: Optional }]
		},
		{
			type: Renderer2,
			decorators: [{ type: Optional }]
		}
	], {
		name: [{ type: Input }],
		isDisabled: [{
			type: Input,
			args: ["disabled"]
		}],
		model: [{
			type: Input,
			args: ["ngModel"]
		}],
		options: [{
			type: Input,
			args: ["ngModelOptions"]
		}],
		update: [{
			type: Output,
			args: ["ngModelChange"]
		}]
	});
})();
function checkParentType$1(parent) {
	if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) throw formGroupNameException();
	else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) throw modelParentException();
}
var ɵNgNoValidate = class {};
_ɵNgNoValidate = ɵNgNoValidate;
_defineProperty(ɵNgNoValidate, "ɵfac", function ɵNgNoValidate_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ɵNgNoValidate)();
});
_defineProperty(ɵNgNoValidate, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _ɵNgNoValidate,
	selectors: [[
		"form",
		3,
		"ngNoForm",
		"",
		3,
		"ngNativeValidate",
		""
	]],
	hostAttrs: ["novalidate", ""],
	standalone: false
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵNgNoValidate, [{
		type: Directive,
		args: [{
			selector: "form:not([ngNoForm]):not([ngNativeValidate])",
			host: { "novalidate": "" },
			standalone: false
		}]
	}], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => NumberValueAccessor),
	multi: true
};
var NumberValueAccessor = class extends BuiltInControlValueAccessor {
	writeValue(value) {
		const normalizedValue = value == null ? "" : value;
		this.setProperty("value", normalizedValue);
	}
	registerOnChange(fn) {
		this.onChange = (value) => {
			fn(value == "" ? null : parseFloat(value));
		};
	}
};
_NumberValueAccessor = NumberValueAccessor;
_defineProperty(NumberValueAccessor, "ɵfac", /*@__PURE__*/ (() => {
	let ɵNumberValueAccessor_BaseFactory = void 0;
	return function NumberValueAccessor_Factory(__ngFactoryType__) {
		return (ɵNumberValueAccessor_BaseFactory || (ɵNumberValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
	};
})());
_defineProperty(NumberValueAccessor, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _NumberValueAccessor,
	selectors: [
		[
			"input",
			"type",
			"number",
			"formControlName",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"input",
			"type",
			"number",
			"formControl",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"input",
			"type",
			"number",
			"ngModel",
			"",
			3,
			"ngNoCva",
			""
		]
	],
	hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
			return ctx.onChange($event.target.value);
		})("blur", function NumberValueAccessor_blur_HostBindingHandler() {
			return ctx.onTouched();
		});
	},
	standalone: false,
	features: [ɵɵProvidersFeature([NUMBER_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
		type: Directive,
		args: [{
			selector: "input[type=number]:not([ngNoCva])[formControlName],input[type=number]:not([ngNoCva])[formControl],input[type=number]:not([ngNoCva])[ngModel]",
			host: {
				"(input)": "onChange($any($event.target).value)",
				"(blur)": "onTouched()"
			},
			providers: [NUMBER_VALUE_ACCESSOR],
			standalone: false
		}]
	}], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => RadioControlValueAccessor),
	multi: true
};
function throwNameError() {
	throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class {
	constructor() {
		_defineProperty(this, "_accessors", []);
	}
	add(control, accessor) {
		this._accessors.push([control, accessor]);
	}
	remove(accessor) {
		for (let i = this._accessors.length - 1; i >= 0; --i) if (this._accessors[i][1] === accessor) {
			this._accessors.splice(i, 1);
			return;
		}
	}
	select(accessor) {
		this._accessors.forEach((c) => {
			if (this._isSameGroup(c, accessor) && c[1] !== accessor) c[1].fireUncheck(accessor.value);
		});
	}
	_isSameGroup(controlPair, accessor) {
		if (!controlPair[0].control) return false;
		return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
	}
};
_RadioControlRegistry = RadioControlRegistry;
_defineProperty(RadioControlRegistry, "ɵfac", function RadioControlRegistry_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _RadioControlRegistry)();
});
_defineProperty(RadioControlRegistry, "ɵprov", /*@__PURE__*/ ɵɵdefineService({
	token: _RadioControlRegistry,
	factory: _RadioControlRegistry.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{ type: Service }], null, null);
})();
var RadioControlValueAccessor = class extends BuiltInControlValueAccessor {
	constructor(renderer, elementRef, _registry, _injector) {
		var _inject;
		super(renderer, elementRef);
		_defineProperty(this, "_registry", void 0);
		_defineProperty(this, "_injector", void 0);
		_defineProperty(this, "_state", void 0);
		_defineProperty(this, "_control", void 0);
		_defineProperty(this, "_fn", void 0);
		_defineProperty(this, "setDisabledStateFired", false);
		_defineProperty(this, "onChange", () => {});
		_defineProperty(this, "name", void 0);
		_defineProperty(this, "formControlName", void 0);
		_defineProperty(this, "value", void 0);
		_defineProperty(this, "callSetDisabledState", (_inject = inject(CALL_SET_DISABLED_STATE, { optional: true })) !== null && _inject !== void 0 ? _inject : setDisabledStateDefault);
		this._registry = _registry;
		this._injector = _injector;
	}
	ngOnChanges(changes) {
		var _this$_control;
		const control = (_this$_control = this._control) === null || _this$_control === void 0 ? void 0 : _this$_control.control;
		if (changes["value"] && control) this.writeValue(control.value);
	}
	ngOnInit() {
		this._control = this._injector.get(NgControl);
		this._checkName();
		this._registry.add(this._control, this);
	}
	ngOnDestroy() {
		this._registry.remove(this);
	}
	writeValue(value) {
		this._state = value === this.value;
		this.setProperty("checked", this._state);
	}
	registerOnChange(fn) {
		this._fn = fn;
		this.onChange = () => {
			fn(this.value);
			this._registry.select(this);
		};
	}
	setDisabledState(isDisabled) {
		if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") this.setProperty("disabled", isDisabled);
		this.setDisabledStateFired = true;
	}
	fireUncheck(value) {
		this.writeValue(value);
	}
	_checkName() {
		if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) throwNameError();
		if (!this.name && this.formControlName) this.name = this.formControlName;
	}
};
_RadioControlValueAccessor = RadioControlValueAccessor;
_defineProperty(RadioControlValueAccessor, "ɵfac", function RadioControlValueAccessor_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _RadioControlValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(RadioControlRegistry), ɵɵdirectiveInject(Injector));
});
_defineProperty(RadioControlValueAccessor, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _RadioControlValueAccessor,
	selectors: [
		[
			"input",
			"type",
			"radio",
			"formControlName",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"input",
			"type",
			"radio",
			"formControl",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"input",
			"type",
			"radio",
			"ngModel",
			"",
			3,
			"ngNoCva",
			""
		]
	],
	hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
			return ctx.onChange();
		})("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
			return ctx.onTouched();
		});
	},
	inputs: {
		name: "name",
		formControlName: "formControlName",
		value: "value"
	},
	standalone: false,
	features: [
		ɵɵProvidersFeature([RADIO_VALUE_ACCESSOR]),
		ɵɵInheritDefinitionFeature,
		ɵɵNgOnChangesFeature
	]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
		type: Directive,
		args: [{
			selector: "input[type=radio]:not([ngNoCva])[formControlName],input[type=radio]:not([ngNoCva])[formControl],input[type=radio]:not([ngNoCva])[ngModel]",
			host: {
				"(change)": "onChange()",
				"(blur)": "onTouched()"
			},
			providers: [RADIO_VALUE_ACCESSOR],
			standalone: false
		}]
	}], () => [
		{ type: Renderer2 },
		{ type: ElementRef },
		{ type: RadioControlRegistry },
		{ type: Injector }
	], {
		name: [{ type: Input }],
		formControlName: [{ type: Input }],
		value: [{ type: Input }]
	});
})();
var RANGE_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => RangeValueAccessor),
	multi: true
};
var RangeValueAccessor = class extends BuiltInControlValueAccessor {
	writeValue(value) {
		this.setProperty("value", parseFloat(value));
	}
	registerOnChange(fn) {
		this.onChange = (value) => {
			fn(value == "" ? null : parseFloat(value));
		};
	}
};
_RangeValueAccessor = RangeValueAccessor;
_defineProperty(RangeValueAccessor, "ɵfac", /*@__PURE__*/ (() => {
	let ɵRangeValueAccessor_BaseFactory = void 0;
	return function RangeValueAccessor_Factory(__ngFactoryType__) {
		return (ɵRangeValueAccessor_BaseFactory || (ɵRangeValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
	};
})());
_defineProperty(RangeValueAccessor, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _RangeValueAccessor,
	selectors: [
		[
			"input",
			"type",
			"range",
			"formControlName",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"input",
			"type",
			"range",
			"formControl",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"input",
			"type",
			"range",
			"ngModel",
			"",
			3,
			"ngNoCva",
			""
		]
	],
	hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
			return ctx.onChange($event.target.value);
		})("input", function RangeValueAccessor_input_HostBindingHandler($event) {
			return ctx.onChange($event.target.value);
		})("blur", function RangeValueAccessor_blur_HostBindingHandler() {
			return ctx.onTouched();
		});
	},
	standalone: false,
	features: [ɵɵProvidersFeature([RANGE_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
		type: Directive,
		args: [{
			selector: "input[type=range]:not([ngNoCva])[formControlName],input[type=range]:not([ngNoCva])[formControl],input[type=range]:not([ngNoCva])[ngModel]",
			host: {
				"(change)": "onChange($any($event.target).value)",
				"(input)": "onChange($any($event.target).value)",
				"(blur)": "onTouched()"
			},
			providers: [RANGE_VALUE_ACCESSOR],
			standalone: false
		}]
	}], null, null);
})();
var FormArray = class extends AbstractControl {
	constructor(controls, validatorOrOpts, asyncValidator) {
		super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
		_defineProperty(this, "controls", void 0);
		this.controls = controls;
		this._initObservables();
		this._setUpdateStrategy(validatorOrOpts);
		this._setUpControls();
		this.updateValueAndValidity({
			onlySelf: true,
			emitEvent: !!this.asyncValidator
		});
	}
	at(index) {
		return this.controls[this._adjustIndex(index)];
	}
	push(control, options = {}) {
		if (Array.isArray(control)) control.forEach((ctrl) => {
			this.controls.push(ctrl);
			this._registerControl(ctrl);
		});
		else {
			this.controls.push(control);
			this._registerControl(control);
		}
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
		this._onCollectionChange();
	}
	insert(index, control, options = {}) {
		this.controls.splice(index, 0, control);
		this._registerControl(control);
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
	}
	removeAt(index, options = {}) {
		let adjustedIndex = this._adjustIndex(index);
		if (adjustedIndex < 0) adjustedIndex = 0;
		if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {});
		this.controls.splice(adjustedIndex, 1);
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
	}
	setControl(index, control, options = {}) {
		let adjustedIndex = this._adjustIndex(index);
		if (adjustedIndex < 0) adjustedIndex = 0;
		if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {});
		this.controls.splice(adjustedIndex, 1);
		if (control) {
			this.controls.splice(adjustedIndex, 0, control);
			this._registerControl(control);
		}
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
		this._onCollectionChange();
	}
	get length() {
		return this.controls.length;
	}
	setValue(value, options = {}) {
		untracked(() => {
			assertAllValuesPresent(this, false, value);
			value.forEach((newValue, index) => {
				assertControlPresent(this, false, index);
				this.at(index).setValue(newValue, {
					onlySelf: true,
					emitEvent: options.emitEvent
				});
			});
			this.updateValueAndValidity(options);
		});
	}
	patchValue(value, options = {}) {
		if (value == null) return;
		value.forEach((newValue, index) => {
			if (this.at(index)) this.at(index).patchValue(newValue, {
				onlySelf: true,
				emitEvent: options.emitEvent
			});
		});
		this.updateValueAndValidity(options);
	}
	reset(value = [], options = {}) {
		this._forEachChild((control, index) => {
			control.reset(value[index], _objectSpread2(_objectSpread2({}, options), {}, { onlySelf: true }));
		});
		this._updatePristine(options, this);
		this._updateTouched(options, this);
		this.updateValueAndValidity(options);
		if ((options === null || options === void 0 ? void 0 : options.emitEvent) !== false) this._events.next(new FormResetEvent(this));
	}
	getRawValue() {
		return this.controls.map((control) => control.getRawValue());
	}
	clear(options = {}) {
		if (this.controls.length < 1) return;
		this._forEachChild((control) => control._registerOnCollectionChange(() => {}));
		this.controls.splice(0);
		this.updateValueAndValidity({ emitEvent: options.emitEvent });
	}
	_adjustIndex(index) {
		return index < 0 ? index + this.length : index;
	}
	_syncPendingControls() {
		let subtreeUpdated = this.controls.reduce((updated, child) => {
			return child._syncPendingControls() ? true : updated;
		}, false);
		if (subtreeUpdated) this.updateValueAndValidity({ onlySelf: true });
		return subtreeUpdated;
	}
	_forEachChild(cb) {
		this.controls.forEach((control, index) => {
			cb(control, index);
		});
	}
	_updateValue() {
		this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
	}
	_anyControls(condition) {
		return this.controls.some((control) => control.enabled && condition(control));
	}
	_setUpControls() {
		this._forEachChild((control) => this._registerControl(control));
	}
	_allControlsDisabled() {
		for (const control of this.controls) if (control.enabled) return false;
		return this.controls.length > 0 || this.disabled;
	}
	_registerControl(control) {
		control.setParent(this);
		control._registerOnCollectionChange(this._onCollectionChange);
	}
	_find(name) {
		var _this$at;
		return (_this$at = this.at(name)) !== null && _this$at !== void 0 ? _this$at : null;
	}
};
var formDirectiveProvider = {
	provide: ControlContainer,
	useExisting: forwardRef(() => FormArrayDirective)
};
var FormArrayDirective = class extends AbstractFormDirective {
	constructor(..._args12) {
		super(..._args12);
		_defineProperty(this, "form", null);
		_defineProperty(this, "ngSubmit", new EventEmitter());
	}
	get control() {
		return this.form;
	}
};
_FormArrayDirective = FormArrayDirective;
_defineProperty(FormArrayDirective, "ɵfac", /*@__PURE__*/ (() => {
	let ɵFormArrayDirective_BaseFactory = void 0;
	return function FormArrayDirective_Factory(__ngFactoryType__) {
		return (ɵFormArrayDirective_BaseFactory || (ɵFormArrayDirective_BaseFactory = ɵɵgetInheritedFactory(_FormArrayDirective)))(__ngFactoryType__ || _FormArrayDirective);
	};
})());
_defineProperty(FormArrayDirective, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _FormArrayDirective,
	selectors: [[
		"",
		"formArray",
		""
	]],
	hostBindings: function FormArrayDirective_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("submit", function FormArrayDirective_submit_HostBindingHandler($event) {
			return ctx.onSubmit($event);
		})("reset", function FormArrayDirective_reset_HostBindingHandler() {
			return ctx.onReset();
		});
	},
	inputs: { form: [
		0,
		"formArray",
		"form"
	] },
	outputs: { ngSubmit: "ngSubmit" },
	exportAs: ["ngForm"],
	standalone: false,
	features: [ɵɵProvidersFeature([formDirectiveProvider]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayDirective, [{
		type: Directive,
		args: [{
			selector: "[formArray]",
			providers: [formDirectiveProvider],
			host: {
				"(submit)": "onSubmit($event)",
				"(reset)": "onReset()"
			},
			exportAs: "ngForm",
			standalone: false
		}]
	}], null, {
		form: [{
			type: Input,
			args: ["formArray"]
		}],
		ngSubmit: [{ type: Output }]
	});
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
	provide: NgControl,
	useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class FormControlDirective extends NgControl {
	set isDisabled(isDisabled) {
		if (typeof ngDevMode === "undefined" || ngDevMode) console.warn(disabledAttrWarning);
	}
	constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState, renderer, injector) {
		super(injector, renderer, valueAccessors);
		_defineProperty(this, "_ngModelWarningConfig", void 0);
		_defineProperty(this, "callSetDisabledState", void 0);
		_defineProperty(this, "viewModel", void 0);
		_defineProperty(this, "form", void 0);
		_defineProperty(this, "model", void 0);
		_defineProperty(this, "update", new EventEmitter());
		_defineProperty(this, "_ngModelWarningSent", false);
		this._ngModelWarningConfig = _ngModelWarningConfig;
		this.callSetDisabledState = callSetDisabledState;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	ngOnChanges(changes) {
		if (this._isControlChanged(changes)) {
			const previousForm = changes["form"].previousValue;
			if (previousForm) {
				cleanUpControl(previousForm, this, false);
				this.removeParseErrorsValidator(previousForm);
			}
			if (!this.isCustomControlBased) {
				var _this$valueAccessor3;
				(_this$valueAccessor3 = this.valueAccessor) !== null && _this$valueAccessor3 !== void 0 || (this.valueAccessor = this.selectedValueAccessor);
				setUpControlValueAccessor(this.form, this, this.callSetDisabledState);
			} else this.setupCustomControl();
			this.form.updateValueAndValidity({ emitEvent: false });
		}
		if (isPropertyUpdated(changes, this.viewModel)) {
			if (typeof ngDevMode === "undefined" || ngDevMode) _ngModelWarning("formControl", FormControlDirective, this, this._ngModelWarningConfig);
			this.form.setValue(this.model);
			this.viewModel = this.model;
		}
	}
	ngOnDestroy() {
		if (this.form) cleanUpControl(this.form, this, false);
	}
	get path() {
		return [];
	}
	get control() {
		return this.form;
	}
	viewToModelUpdate(newValue) {
		this.viewModel = newValue;
		this.update.emit(newValue);
	}
	_isControlChanged(changes) {
		return Object.hasOwn(changes, "form");
	}
	ɵngControlCreate(host) {
		super.ngControlCreate(host);
	}
	ɵngControlUpdate(host) {
		super.ngControlUpdate(host, true);
	}
};
_FormControlDirective = FormControlDirective;
_defineProperty(FormControlDirective, "_ngModelWarningSentOnce", false);
_defineProperty(FormControlDirective, "ɵfac", function FormControlDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _FormControlDirective)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8), ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(Injector, 8));
});
_defineProperty(FormControlDirective, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _FormControlDirective,
	selectors: [[
		"",
		"formControl",
		""
	]],
	inputs: {
		form: [
			0,
			"formControl",
			"form"
		],
		isDisabled: [
			0,
			"disabled",
			"isDisabled"
		],
		model: [
			0,
			"ngModel",
			"model"
		]
	},
	outputs: { update: "ngModelChange" },
	exportAs: ["ngForm"],
	standalone: false,
	features: [
		ɵɵProvidersFeature([formControlBinding, NG_CONTROL_INTEGRATION_PROVIDER]),
		ɵɵInheritDefinitionFeature,
		ɵɵNgOnChangesFeature,
		ɵɵControlFeature(null)
	]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
		type: Directive,
		args: [{
			selector: "[formControl]",
			providers: [formControlBinding, NG_CONTROL_INTEGRATION_PROVIDER],
			exportAs: "ngForm",
			standalone: false
		}]
	}], () => [
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALUE_ACCESSOR]
				}
			]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
			}]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [CALL_SET_DISABLED_STATE]
			}]
		},
		{
			type: Renderer2,
			decorators: [{ type: Optional }]
		},
		{
			type: Injector,
			decorators: [{ type: Optional }]
		}
	], {
		form: [{
			type: Input,
			args: ["formControl"]
		}],
		isDisabled: [{
			type: Input,
			args: ["disabled"]
		}],
		model: [{
			type: Input,
			args: ["ngModel"]
		}],
		update: [{
			type: Output,
			args: ["ngModelChange"]
		}]
	});
})();
var formGroupNameProvider = {
	provide: ControlContainer,
	useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class extends AbstractFormGroupDirective {
	constructor(parent, validators, asyncValidators) {
		super();
		_defineProperty(this, "name", null);
		this._parent = parent;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	_checkParentType() {
		if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) throw groupParentException();
	}
};
_FormGroupName = FormGroupName;
_defineProperty(FormGroupName, "ɵfac", function FormGroupName_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _FormGroupName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
});
_defineProperty(FormGroupName, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _FormGroupName,
	selectors: [[
		"",
		"formGroupName",
		""
	]],
	inputs: { name: [
		0,
		"formGroupName",
		"name"
	] },
	standalone: false,
	features: [ɵɵProvidersFeature([formGroupNameProvider]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
		type: Directive,
		args: [{
			selector: "[formGroupName]",
			providers: [formGroupNameProvider],
			standalone: false
		}]
	}], () => [
		{
			type: ControlContainer,
			decorators: [
				{ type: Optional },
				{ type: Host },
				{ type: SkipSelf }
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		}
	], { name: [{
		type: Input,
		args: ["formGroupName"]
	}] });
})();
var formArrayNameProvider = {
	provide: ControlContainer,
	useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class extends ControlContainer {
	constructor(parent, validators, asyncValidators) {
		super();
		_defineProperty(this, "_parent", void 0);
		_defineProperty(this, "name", null);
		this._parent = parent;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	ngOnInit() {
		if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) throw arrayParentException();
		this.formDirective.addFormArray(this);
	}
	ngOnDestroy() {
		var _this$formDirective3;
		(_this$formDirective3 = this.formDirective) === null || _this$formDirective3 === void 0 || _this$formDirective3.removeFormArray(this);
	}
	get control() {
		return this.formDirective.getFormArray(this);
	}
	get formDirective() {
		return this._parent ? this._parent.formDirective : null;
	}
	get path() {
		return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
	}
};
_FormArrayName = FormArrayName;
_defineProperty(FormArrayName, "ɵfac", function FormArrayName_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _FormArrayName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
});
_defineProperty(FormArrayName, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _FormArrayName,
	selectors: [[
		"",
		"formArrayName",
		""
	]],
	inputs: { name: [
		0,
		"formArrayName",
		"name"
	] },
	standalone: false,
	features: [ɵɵProvidersFeature([formArrayNameProvider]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
		type: Directive,
		args: [{
			selector: "[formArrayName]",
			providers: [formArrayNameProvider],
			standalone: false
		}]
	}], () => [
		{
			type: ControlContainer,
			decorators: [
				{ type: Optional },
				{ type: Host },
				{ type: SkipSelf }
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		}
	], { name: [{
		type: Input,
		args: ["formArrayName"]
	}] });
})();
function hasInvalidParent(parent) {
	return !(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
	provide: NgControl,
	useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class FormControlName extends NgControl {
	set isDisabled(isDisabled) {
		if (typeof ngDevMode === "undefined" || ngDevMode) console.warn(disabledAttrWarning);
	}
	constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig, renderer, injector) {
		super(injector, renderer, valueAccessors);
		_defineProperty(this, "_ngModelWarningConfig", void 0);
		_defineProperty(this, "_added", false);
		_defineProperty(this, "viewModel", void 0);
		_defineProperty(this, "control", void 0);
		_defineProperty(this, "name", null);
		_defineProperty(this, "model", void 0);
		_defineProperty(this, "update", new EventEmitter());
		_defineProperty(this, "_ngModelWarningSent", false);
		this._ngModelWarningConfig = _ngModelWarningConfig;
		this._parent = parent;
		this._setValidators(validators);
		this._setAsyncValidators(asyncValidators);
	}
	_setupWithForm(control, callSetDisabledState) {
		this.control = control;
		if (!this.isCustomControlBased) {
			var _this$valueAccessor4;
			(_this$valueAccessor4 = this.valueAccessor) !== null && _this$valueAccessor4 !== void 0 || (this.valueAccessor = this.selectedValueAccessor);
			setUpControlValueAccessor(control, this, callSetDisabledState);
		} else this.setupCustomControl();
	}
	ngOnChanges(changes) {
		if (!this._added) this._setUpControl();
		if (isPropertyUpdated(changes, this.viewModel)) {
			if (typeof ngDevMode === "undefined" || ngDevMode) _ngModelWarning("formControlName", FormControlName, this, this._ngModelWarningConfig);
			this.viewModel = this.model;
			this.formDirective.updateModel(this, this.model);
		}
	}
	ngOnDestroy() {
		var _this$formDirective4;
		(_this$formDirective4 = this.formDirective) === null || _this$formDirective4 === void 0 || _this$formDirective4.removeControl(this);
	}
	viewToModelUpdate(newValue) {
		this.viewModel = newValue;
		this.update.emit(newValue);
	}
	get path() {
		return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
	}
	get formDirective() {
		return this._parent ? this._parent.formDirective : null;
	}
	_setUpControl() {
		if (typeof ngDevMode === "undefined" || ngDevMode) checkParentType(this._parent, this.name);
		this.control = this.formDirective.addControl(this);
		this._added = true;
	}
	ɵngControlCreate(host) {
		super.ngControlCreate(host);
	}
	ɵngControlUpdate(host) {
		if (!this.isCustomControlBased) return;
		if (!this._added) this._setUpControl();
		super.ngControlUpdate(host, true);
	}
};
_FormControlName = FormControlName;
_defineProperty(FormControlName, "_ngModelWarningSentOnce", false);
_defineProperty(FormControlName, "ɵfac", function FormControlName_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _FormControlName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(Injector, 8));
});
_defineProperty(FormControlName, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _FormControlName,
	selectors: [[
		"",
		"formControlName",
		""
	]],
	inputs: {
		name: [
			0,
			"formControlName",
			"name"
		],
		isDisabled: [
			0,
			"disabled",
			"isDisabled"
		],
		model: [
			0,
			"ngModel",
			"model"
		]
	},
	outputs: { update: "ngModelChange" },
	standalone: false,
	features: [
		ɵɵProvidersFeature([controlNameBinding, NG_CONTROL_INTEGRATION_PROVIDER]),
		ɵɵInheritDefinitionFeature,
		ɵɵNgOnChangesFeature,
		ɵɵControlFeature(null)
	]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
		type: Directive,
		args: [{
			selector: "[formControlName]",
			providers: [controlNameBinding, NG_CONTROL_INTEGRATION_PROVIDER],
			standalone: false
		}]
	}], () => [
		{
			type: ControlContainer,
			decorators: [
				{ type: Optional },
				{ type: Host },
				{ type: SkipSelf }
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_ASYNC_VALIDATORS]
				}
			]
		},
		{
			type: void 0,
			decorators: [
				{ type: Optional },
				{ type: Self },
				{
					type: Inject,
					args: [NG_VALUE_ACCESSOR]
				}
			]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
			}]
		},
		{
			type: Renderer2,
			decorators: [{ type: Optional }]
		},
		{
			type: Injector,
			decorators: [{ type: Optional }]
		}
	], {
		name: [{
			type: Input,
			args: ["formControlName"]
		}],
		isDisabled: [{
			type: Input,
			args: ["disabled"]
		}],
		model: [{
			type: Input,
			args: ["ngModel"]
		}],
		update: [{
			type: Output,
			args: ["ngModelChange"]
		}]
	});
})();
function checkParentType(parent, name) {
	if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) throw ngModelGroupException();
	else if (!(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName)) throw controlParentException(name);
}
var SELECT_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => SelectControlValueAccessor),
	multi: true
};
function _buildValueString$1(id, value) {
	if (id == null) return `${value}`;
	if (value && typeof value === "object") value = "Object";
	return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
	return valueString.split(":")[0];
}
var SelectControlValueAccessor = class extends BuiltInControlValueAccessor {
	constructor(..._args13) {
		super(..._args13);
		_defineProperty(this, "value", void 0);
		_defineProperty(this, "_optionMap", /* @__PURE__ */ new Map());
		_defineProperty(this, "_idCounter", 0);
		_defineProperty(this, "_compareWith", Object.is);
		_defineProperty(this, "appRefInjector", inject(ApplicationRef).injector);
		_defineProperty(this, "destroyRef", inject(DestroyRef));
		_defineProperty(this, "cdr", inject(ChangeDetectorRef));
		_defineProperty(this, "_queuedWrite", false);
	}
	set compareWith(fn) {
		if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
		this._compareWith = fn;
	}
	_writeValueAfterRender() {
		if (this._queuedWrite || this.appRefInjector.destroyed) return;
		this._queuedWrite = true;
		afterNextRender({ write: () => {
			if (this.destroyRef.destroyed) return;
			this._queuedWrite = false;
			this.writeValue(this.value);
		} }, { injector: this.appRefInjector });
	}
	writeValue(value) {
		this.cdr.markForCheck();
		this.value = value;
		const valueString = _buildValueString$1(this._getOptionId(value), value);
		this.setProperty("value", valueString);
	}
	registerOnChange(fn) {
		this.onChange = (valueString) => {
			this.value = this._getOptionValue(valueString);
			fn(this.value);
		};
	}
	_registerOption() {
		return (this._idCounter++).toString();
	}
	_getOptionId(value) {
		for (const id of this._optionMap.keys()) if (this._compareWith(this._optionMap.get(id), value)) return id;
		return null;
	}
	_getOptionValue(valueString) {
		const id = _extractId$1(valueString);
		return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
	}
};
_SelectControlValueAccessor = SelectControlValueAccessor;
_defineProperty(SelectControlValueAccessor, "ɵfac", /*@__PURE__*/ (() => {
	let ɵSelectControlValueAccessor_BaseFactory = void 0;
	return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
		return (ɵSelectControlValueAccessor_BaseFactory || (ɵSelectControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
	};
})());
_defineProperty(SelectControlValueAccessor, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _SelectControlValueAccessor,
	selectors: [
		[
			"select",
			"formControlName",
			"",
			3,
			"multiple",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"select",
			"formControl",
			"",
			3,
			"multiple",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"select",
			"ngModel",
			"",
			3,
			"multiple",
			"",
			3,
			"ngNoCva",
			""
		]
	],
	hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
			return ctx.onChange($event.target.value);
		})("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
			return ctx.onTouched();
		});
	},
	inputs: { compareWith: "compareWith" },
	standalone: false,
	features: [ɵɵProvidersFeature([SELECT_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
		type: Directive,
		args: [{
			selector: "select:not([multiple]):not([ngNoCva])[formControlName],select:not([multiple]):not([ngNoCva])[formControl],select:not([multiple]):not([ngNoCva])[ngModel]",
			host: {
				"(change)": "onChange($any($event.target).value)",
				"(blur)": "onTouched()"
			},
			providers: [SELECT_VALUE_ACCESSOR],
			standalone: false
		}]
	}], null, { compareWith: [{ type: Input }] });
})();
var NgSelectOption = class {
	constructor(_element, _renderer, _select) {
		_defineProperty(this, "_element", void 0);
		_defineProperty(this, "_renderer", void 0);
		_defineProperty(this, "_select", void 0);
		_defineProperty(this, "id", void 0);
		this._element = _element;
		this._renderer = _renderer;
		this._select = _select;
		if (this._select) this.id = this._select._registerOption();
	}
	set ngValue(value) {
		if (this._select == null) return;
		this._select._optionMap.set(this.id, value);
		this._setElementValue(_buildValueString$1(this.id, value));
		this._select._writeValueAfterRender();
	}
	set value(value) {
		var _this$_select;
		this._setElementValue(value);
		(_this$_select = this._select) === null || _this$_select === void 0 || _this$_select._writeValueAfterRender();
	}
	_setElementValue(value) {
		this._renderer.setProperty(this._element.nativeElement, "value", value);
	}
	ngOnDestroy() {
		var _this$_select2, _this$_select3;
		(_this$_select2 = this._select) === null || _this$_select2 === void 0 || _this$_select2._optionMap.delete(this.id);
		(_this$_select3 = this._select) === null || _this$_select3 === void 0 || _this$_select3._writeValueAfterRender();
	}
};
_NgSelectOption = NgSelectOption;
_defineProperty(NgSelectOption, "ɵfac", function NgSelectOption_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgSelectOption)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SelectControlValueAccessor, 9));
});
_defineProperty(NgSelectOption, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _NgSelectOption,
	selectors: [["option"]],
	inputs: {
		ngValue: "ngValue",
		value: "value"
	},
	standalone: false
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
		type: Directive,
		args: [{
			selector: "option",
			standalone: false
		}]
	}], () => [
		{ type: ElementRef },
		{ type: Renderer2 },
		{
			type: SelectControlValueAccessor,
			decorators: [{ type: Optional }, { type: Host }]
		}
	], {
		ngValue: [{
			type: Input,
			args: ["ngValue"]
		}],
		value: [{
			type: Input,
			args: ["value"]
		}]
	});
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
	multi: true
};
function _buildValueString(id, value) {
	if (id == null) return `${value}`;
	if (typeof value === "string") value = `'${value}'`;
	if (value && typeof value === "object") value = "Object";
	return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
	return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class extends BuiltInControlValueAccessor {
	constructor(..._args14) {
		super(..._args14);
		_defineProperty(this, "value", void 0);
		_defineProperty(this, "_optionMap", /* @__PURE__ */ new Map());
		_defineProperty(this, "_idCounter", 0);
		_defineProperty(this, "_compareWith", Object.is);
	}
	set compareWith(fn) {
		if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
		this._compareWith = fn;
	}
	writeValue(value) {
		this.value = value;
		let optionSelectedStateSetter;
		if (Array.isArray(value)) {
			const ids = value.map((v) => this._getOptionId(v));
			optionSelectedStateSetter = (opt, id) => {
				opt._setSelected(ids.indexOf(id) > -1);
			};
		} else optionSelectedStateSetter = (opt) => {
			opt._setSelected(false);
		};
		this._optionMap.forEach(optionSelectedStateSetter);
	}
	registerOnChange(fn) {
		this.onChange = (element) => {
			const selected = [];
			const selectedOptions = element.selectedOptions;
			if (selectedOptions !== void 0) {
				const options = selectedOptions;
				for (let i = 0; i < options.length; i++) {
					const opt = options[i];
					const val = this._getOptionValue(opt.value);
					selected.push(val);
				}
			} else {
				const options = element.options;
				for (let i = 0; i < options.length; i++) {
					const opt = options[i];
					if (opt.selected) {
						const val = this._getOptionValue(opt.value);
						selected.push(val);
					}
				}
			}
			this.value = selected;
			fn(selected);
		};
	}
	_registerOption(value) {
		const id = (this._idCounter++).toString();
		this._optionMap.set(id, value);
		return id;
	}
	_getOptionId(value) {
		for (const id of this._optionMap.keys()) if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
		return null;
	}
	_getOptionValue(valueString) {
		const id = _extractId(valueString);
		return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
	}
};
_SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
_defineProperty(SelectMultipleControlValueAccessor, "ɵfac", /*@__PURE__*/ (() => {
	let ɵSelectMultipleControlValueAccessor_BaseFactory = void 0;
	return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
		return (ɵSelectMultipleControlValueAccessor_BaseFactory || (ɵSelectMultipleControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
	};
})());
_defineProperty(SelectMultipleControlValueAccessor, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _SelectMultipleControlValueAccessor,
	selectors: [
		[
			"select",
			"multiple",
			"",
			"formControlName",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"select",
			"multiple",
			"",
			"formControl",
			"",
			3,
			"ngNoCva",
			""
		],
		[
			"select",
			"multiple",
			"",
			"ngModel",
			"",
			3,
			"ngNoCva",
			""
		]
	],
	hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
			return ctx.onChange($event.target);
		})("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
			return ctx.onTouched();
		});
	},
	inputs: { compareWith: "compareWith" },
	standalone: false,
	features: [ɵɵProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
		type: Directive,
		args: [{
			selector: "select[multiple]:not([ngNoCva])[formControlName],select[multiple]:not([ngNoCva])[formControl],select[multiple]:not([ngNoCva])[ngModel]",
			host: {
				"(change)": "onChange($event.target)",
				"(blur)": "onTouched()"
			},
			providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
			standalone: false
		}]
	}], null, { compareWith: [{ type: Input }] });
})();
var ɵNgSelectMultipleOption = class {
	constructor(_element, _renderer, _select) {
		_defineProperty(this, "_element", void 0);
		_defineProperty(this, "_renderer", void 0);
		_defineProperty(this, "_select", void 0);
		_defineProperty(this, "id", void 0);
		_defineProperty(this, "_value", void 0);
		this._element = _element;
		this._renderer = _renderer;
		this._select = _select;
		if (this._select) this.id = this._select._registerOption(this);
	}
	set ngValue(value) {
		if (this._select == null) return;
		this._value = value;
		this._setElementValue(_buildValueString(this.id, value));
		this._select.writeValue(this._select.value);
	}
	set value(value) {
		if (this._select) {
			this._value = value;
			this._setElementValue(_buildValueString(this.id, value));
			this._select.writeValue(this._select.value);
		} else this._setElementValue(value);
	}
	_setElementValue(value) {
		this._renderer.setProperty(this._element.nativeElement, "value", value);
	}
	_setSelected(selected) {
		this._renderer.setProperty(this._element.nativeElement, "selected", selected);
	}
	ngOnDestroy() {
		if (this._select) {
			this._select._optionMap.delete(this.id);
			this._select.writeValue(this._select.value);
		}
	}
};
_ɵNgSelectMultipleOption = ɵNgSelectMultipleOption;
_defineProperty(ɵNgSelectMultipleOption, "ɵfac", function ɵNgSelectMultipleOption_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ɵNgSelectMultipleOption)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SelectMultipleControlValueAccessor, 9));
});
_defineProperty(ɵNgSelectMultipleOption, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _ɵNgSelectMultipleOption,
	selectors: [["option"]],
	inputs: {
		ngValue: "ngValue",
		value: "value"
	},
	standalone: false
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵNgSelectMultipleOption, [{
		type: Directive,
		args: [{
			selector: "option",
			standalone: false
		}]
	}], () => [
		{ type: ElementRef },
		{ type: Renderer2 },
		{
			type: SelectMultipleControlValueAccessor,
			decorators: [{ type: Optional }, { type: Host }]
		}
	], {
		ngValue: [{
			type: Input,
			args: ["ngValue"]
		}],
		value: [{
			type: Input,
			args: ["value"]
		}]
	});
})();
var SHARED_FORM_DIRECTIVES = [
	ɵNgNoValidate,
	NgSelectOption,
	ɵNgSelectMultipleOption,
	DefaultValueAccessor,
	NumberValueAccessor,
	RangeValueAccessor,
	CheckboxControlValueAccessor,
	SelectControlValueAccessor,
	SelectMultipleControlValueAccessor,
	RadioControlValueAccessor,
	NgControlStatus,
	NgControlStatusGroup,
	RequiredValidator,
	MinLengthValidator,
	MaxLengthValidator,
	PatternValidator,
	CheckboxRequiredValidator,
	EmailValidator,
	MinValidator,
	MaxValidator
];
var TEMPLATE_DRIVEN_DIRECTIVES = [
	NgModel,
	NgModelGroup,
	NgForm
];
var REACTIVE_DRIVEN_DIRECTIVES = [
	FormControlDirective,
	FormGroupDirective,
	FormArrayDirective,
	FormControlName,
	FormGroupName,
	FormArrayName
];
var ɵInternalFormsSharedModule = class {};
_ɵInternalFormsSharedModule = ɵInternalFormsSharedModule;
_defineProperty(ɵInternalFormsSharedModule, "ɵfac", function ɵInternalFormsSharedModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ɵInternalFormsSharedModule)();
});
_defineProperty(ɵInternalFormsSharedModule, "ɵmod", /*@__PURE__*/ ɵɵdefineNgModule({
	type: _ɵInternalFormsSharedModule,
	declarations: [
		ɵNgNoValidate,
		NgSelectOption,
		ɵNgSelectMultipleOption,
		DefaultValueAccessor,
		NumberValueAccessor,
		RangeValueAccessor,
		CheckboxControlValueAccessor,
		SelectControlValueAccessor,
		SelectMultipleControlValueAccessor,
		RadioControlValueAccessor,
		NgControlStatus,
		NgControlStatusGroup,
		RequiredValidator,
		MinLengthValidator,
		MaxLengthValidator,
		PatternValidator,
		CheckboxRequiredValidator,
		EmailValidator,
		MinValidator,
		MaxValidator
	],
	exports: [
		ɵNgNoValidate,
		NgSelectOption,
		ɵNgSelectMultipleOption,
		DefaultValueAccessor,
		NumberValueAccessor,
		RangeValueAccessor,
		CheckboxControlValueAccessor,
		SelectControlValueAccessor,
		SelectMultipleControlValueAccessor,
		RadioControlValueAccessor,
		NgControlStatus,
		NgControlStatusGroup,
		RequiredValidator,
		MinLengthValidator,
		MaxLengthValidator,
		PatternValidator,
		CheckboxRequiredValidator,
		EmailValidator,
		MinValidator,
		MaxValidator
	]
}));
_defineProperty(ɵInternalFormsSharedModule, "ɵinj", /*@__PURE__*/ ɵɵdefineInjector({}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵInternalFormsSharedModule, [{
		type: NgModule,
		args: [{
			declarations: SHARED_FORM_DIRECTIVES,
			exports: SHARED_FORM_DIRECTIVES
		}]
	}], null, null);
})();
function isAbstractControlOptions(options) {
	return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class FormBuilder {
	constructor() {
		_defineProperty(this, "useNonNullable", false);
	}
	get nonNullable() {
		const nnfb = new FormBuilder();
		nnfb.useNonNullable = true;
		return nnfb;
	}
	group(controls, options = null) {
		const reducedControls = this._reduceControls(controls);
		let newOptions = {};
		if (isAbstractControlOptions(options)) newOptions = options;
		else if (options !== null) {
			newOptions.validators = options.validator;
			newOptions.asyncValidators = options.asyncValidator;
		}
		return new FormGroup(reducedControls, newOptions);
	}
	record(controls, options = null) {
		return new FormRecord(this._reduceControls(controls), options);
	}
	control(formState, validatorOrOpts, asyncValidator) {
		let newOptions = {};
		if (!this.useNonNullable) return new FormControl(formState, validatorOrOpts, asyncValidator);
		if (isAbstractControlOptions(validatorOrOpts)) newOptions = validatorOrOpts;
		else {
			newOptions.validators = validatorOrOpts;
			newOptions.asyncValidators = asyncValidator;
		}
		return new FormControl(formState, _objectSpread2(_objectSpread2({}, newOptions), {}, { nonNullable: true }));
	}
	array(controls, validatorOrOpts, asyncValidator) {
		return new FormArray(controls.map((c) => this._createControl(c)), validatorOrOpts, asyncValidator);
	}
	_reduceControls(controls) {
		const createdControls = {};
		Object.keys(controls).forEach((controlName) => {
			createdControls[controlName] = this._createControl(controls[controlName]);
		});
		return createdControls;
	}
	_createControl(controls) {
		if (controls instanceof FormControl) return controls;
		else if (controls instanceof AbstractControl) return controls;
		else if (Array.isArray(controls)) {
			const value = controls[0];
			const validator = controls.length > 1 ? controls[1] : null;
			const asyncValidator = controls.length > 2 ? controls[2] : null;
			return this.control(value, validator, asyncValidator);
		} else return this.control(controls);
	}
};
_FormBuilder = FormBuilder;
_defineProperty(FormBuilder, "ɵfac", function FormBuilder_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _FormBuilder)();
});
_defineProperty(FormBuilder, "ɵprov", /*@__PURE__*/ ɵɵdefineService({
	token: _FormBuilder,
	factory: _FormBuilder.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{ type: Service }], null, null);
})();
var NonNullableFormBuilder = class {};
_NonNullableFormBuilder = NonNullableFormBuilder;
_defineProperty(NonNullableFormBuilder, "ɵfac", function NonNullableFormBuilder_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NonNullableFormBuilder)();
});
_defineProperty(NonNullableFormBuilder, "ɵprov", /*@__PURE__*/ ɵɵdefineService({
	token: _NonNullableFormBuilder,
	factory: () => {
		return (() => {
			return inject(FormBuilder).nonNullable;
		})();
	}
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
		type: Service,
		args: [{ factory: () => inject(FormBuilder).nonNullable }]
	}], null, null);
})();
var UntypedFormBuilder = class extends FormBuilder {
	group(controlsConfig, options = null) {
		return super.group(controlsConfig, options);
	}
	control(formState, validatorOrOpts, asyncValidator) {
		return super.control(formState, validatorOrOpts, asyncValidator);
	}
	array(controlsConfig, validatorOrOpts, asyncValidator) {
		return super.array(controlsConfig, validatorOrOpts, asyncValidator);
	}
};
_UntypedFormBuilder = UntypedFormBuilder;
_defineProperty(UntypedFormBuilder, "ɵfac", function UntypedFormBuilder_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _UntypedFormBuilder)();
});
_defineProperty(UntypedFormBuilder, "ɵprov", /*@__PURE__*/ ɵɵdefineService({
	token: _UntypedFormBuilder,
	factory: _UntypedFormBuilder.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{ type: Service }], null, null);
})();
var FormsModule = class FormsModule {
	static withConfig(opts) {
		var _opts$callSetDisabled;
		return {
			ngModule: FormsModule,
			providers: [{
				provide: CALL_SET_DISABLED_STATE,
				useValue: (_opts$callSetDisabled = opts.callSetDisabledState) !== null && _opts$callSetDisabled !== void 0 ? _opts$callSetDisabled : setDisabledStateDefault
			}]
		};
	}
};
_FormsModule = FormsModule;
_defineProperty(FormsModule, "ɵfac", function FormsModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _FormsModule)();
});
_defineProperty(FormsModule, "ɵmod", /*@__PURE__*/ ɵɵdefineNgModule({
	type: _FormsModule,
	declarations: [
		NgModel,
		NgModelGroup,
		NgForm
	],
	exports: [
		ɵInternalFormsSharedModule,
		NgModel,
		NgModelGroup,
		NgForm
	]
}));
_defineProperty(FormsModule, "ɵinj", /*@__PURE__*/ ɵɵdefineInjector({ imports: [ɵInternalFormsSharedModule] }));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
		type: NgModule,
		args: [{
			declarations: TEMPLATE_DRIVEN_DIRECTIVES,
			exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
		}]
	}], null, null);
})();
var ReactiveFormsModule = class ReactiveFormsModule {
	static withConfig(opts) {
		var _opts$warnOnNgModelWi, _opts$callSetDisabled2;
		return {
			ngModule: ReactiveFormsModule,
			providers: [{
				provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
				useValue: (_opts$warnOnNgModelWi = opts.warnOnNgModelWithFormControl) !== null && _opts$warnOnNgModelWi !== void 0 ? _opts$warnOnNgModelWi : "always"
			}, {
				provide: CALL_SET_DISABLED_STATE,
				useValue: (_opts$callSetDisabled2 = opts.callSetDisabledState) !== null && _opts$callSetDisabled2 !== void 0 ? _opts$callSetDisabled2 : setDisabledStateDefault
			}]
		};
	}
};
_ReactiveFormsModule = ReactiveFormsModule;
_defineProperty(ReactiveFormsModule, "ɵfac", function ReactiveFormsModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ReactiveFormsModule)();
});
_defineProperty(ReactiveFormsModule, "ɵmod", /*@__PURE__*/ ɵɵdefineNgModule({
	type: _ReactiveFormsModule,
	declarations: [
		FormControlDirective,
		FormGroupDirective,
		FormArrayDirective,
		FormControlName,
		FormGroupName,
		FormArrayName
	],
	exports: [
		ɵInternalFormsSharedModule,
		FormControlDirective,
		FormGroupDirective,
		FormArrayDirective,
		FormControlName,
		FormGroupName,
		FormArrayName
	]
}));
_defineProperty(ReactiveFormsModule, "ɵinj", /*@__PURE__*/ ɵɵdefineInjector({ imports: [ɵInternalFormsSharedModule] }));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
		type: NgModule,
		args: [{
			declarations: [REACTIVE_DRIVEN_DIRECTIVES],
			exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@angular/forms/fesm2022/_validation_errors-chunk.mjs
/**
* @license Angular v22.2.0
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var FIELD_TREE = /* @__PURE__ */ Symbol("FIELD_TREE");
var boundPathDepth = 0;
function getBoundPathDepth() {
	return boundPathDepth;
}
function setBoundPathDepthForResolution(fn, depth) {
	return (...args) => {
		try {
			boundPathDepth = depth;
			return fn(...args);
		} finally {
			boundPathDepth = 0;
		}
	};
}
function shortCircuitFalse(value) {
	return !value;
}
function shortCircuitTrue(value) {
	return value;
}
function isArray(value) {
	return Array.isArray(value);
}
function isObject(value) {
	return (typeof value === "object" || typeof value === "function") && value != null;
}
var DYNAMIC = Symbol();
var IGNORED = Symbol();
var AbstractLogic = class {
	constructor(predicates) {
		_defineProperty(this, "predicates", void 0);
		_defineProperty(this, "fns", []);
		this.predicates = predicates;
	}
	push(logicFn) {
		this.fns.push(wrapWithPredicates(this.predicates, logicFn));
	}
	mergeIn(other) {
		const fns = this.predicates ? other.fns.map((fn) => wrapWithPredicates(this.predicates, fn)) : other.fns;
		this.fns.push(...fns);
	}
	hasRules() {
		return this.fns.length > 0;
	}
};
var BooleanOrLogic = class extends AbstractLogic {
	get defaultValue() {
		return false;
	}
	compute(arg) {
		return this.fns.some((f) => {
			const result = f(arg);
			return result && result !== IGNORED;
		});
	}
};
var ArrayMergeIgnoreLogic = class ArrayMergeIgnoreLogic extends AbstractLogic {
	static ignoreNull(predicates) {
		return new ArrayMergeIgnoreLogic(predicates, (e) => e === null);
	}
	constructor(predicates, ignore) {
		super(predicates);
		_defineProperty(this, "ignore", void 0);
		this.ignore = ignore;
	}
	get defaultValue() {
		return [];
	}
	compute(arg) {
		return this.fns.reduce((prev, f) => {
			const value = f(arg);
			if (value === void 0 || value === IGNORED) return prev;
			else if (isArray(value)) return [...prev, ...this.ignore ? value.filter((e) => !this.ignore(e)) : value];
			else {
				if (this.ignore && this.ignore(value)) return prev;
				return [...prev, value];
			}
		}, []);
	}
};
var ArrayMergeLogic = class extends ArrayMergeIgnoreLogic {
	constructor(predicates) {
		super(predicates, void 0);
	}
};
var MetadataMergeLogic = class extends AbstractLogic {
	get defaultValue() {
		return this.key.reducer.getInitial();
	}
	constructor(predicates, key) {
		super(predicates);
		_defineProperty(this, "key", void 0);
		this.key = key;
	}
	compute(ctx) {
		if (this.fns.length === 0) return this.key.reducer.getInitial();
		let acc = this.key.reducer.getInitial();
		for (let i = 0; i < this.fns.length; i++) {
			const item = this.fns[i](ctx);
			if (item !== IGNORED) acc = this.key.reducer.reduce(acc, item);
		}
		return acc;
	}
};
function wrapWithPredicates(predicates, logicFn) {
	if (predicates.length === 0) return logicFn;
	return (arg) => {
		for (const predicate of predicates) {
			let predicateField = arg.stateOf(predicate.path);
			const depthDiff = untracked(predicateField.structure.pathKeys).length - predicate.depth;
			for (let i = 0; i < depthDiff; i++) predicateField = predicateField.structure.parent;
			if (!predicate.fn(predicateField.context)) return IGNORED;
		}
		return logicFn(arg);
	};
}
var LogicContainer = class {
	constructor(predicates) {
		_defineProperty(this, "predicates", void 0);
		_defineProperty(this, "hidden", void 0);
		_defineProperty(this, "disabledReasons", void 0);
		_defineProperty(this, "readonly", void 0);
		_defineProperty(this, "syncErrors", void 0);
		_defineProperty(this, "syncTreeErrors", void 0);
		_defineProperty(this, "asyncErrors", void 0);
		_defineProperty(this, "metadata", /* @__PURE__ */ new Map());
		this.predicates = predicates;
		this.hidden = new BooleanOrLogic(predicates);
		this.disabledReasons = new ArrayMergeLogic(predicates);
		this.readonly = new BooleanOrLogic(predicates);
		this.syncErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
		this.syncTreeErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
		this.asyncErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
	}
	hasAnyLogic() {
		return this.hidden.hasRules() || this.disabledReasons.hasRules() || this.readonly.hasRules() || this.syncErrors.hasRules() || this.syncTreeErrors.hasRules() || this.asyncErrors.hasRules() || this.metadata.size > 0;
	}
	hasMetadata(key) {
		return this.metadata.has(key);
	}
	hasMetadataKeys() {
		return this.metadata.size > 0;
	}
	getMetadataKeys() {
		return this.metadata.keys();
	}
	getMetadata(key) {
		if (!this.metadata.has(key)) this.metadata.set(key, new MetadataMergeLogic(this.predicates, key));
		return this.metadata.get(key);
	}
	mergeIn(other) {
		this.hidden.mergeIn(other.hidden);
		this.disabledReasons.mergeIn(other.disabledReasons);
		this.readonly.mergeIn(other.readonly);
		this.syncErrors.mergeIn(other.syncErrors);
		this.syncTreeErrors.mergeIn(other.syncTreeErrors);
		this.asyncErrors.mergeIn(other.asyncErrors);
		for (const key of other.getMetadataKeys()) {
			const metadataLogic = other.metadata.get(key);
			this.getMetadata(key).mergeIn(metadataLogic);
		}
	}
};
var AbstractLogicNodeBuilder = class {
	constructor(depth) {
		_defineProperty(this, "depth", void 0);
		this.depth = depth;
	}
	build() {
		return new LeafLogicNode(this, [], 0);
	}
};
var LogicNodeBuilder = class LogicNodeBuilder extends AbstractLogicNodeBuilder {
	constructor(depth) {
		super(depth);
		_defineProperty(this, "current", void 0);
		_defineProperty(this, "all", []);
	}
	addHiddenRule(logic) {
		this.getCurrent().addHiddenRule(logic);
	}
	addDisabledReasonRule(logic) {
		this.getCurrent().addDisabledReasonRule(logic);
	}
	addReadonlyRule(logic) {
		this.getCurrent().addReadonlyRule(logic);
	}
	addSyncErrorRule(logic) {
		this.getCurrent().addSyncErrorRule(logic);
	}
	addSyncTreeErrorRule(logic) {
		this.getCurrent().addSyncTreeErrorRule(logic);
	}
	addAsyncErrorRule(logic) {
		this.getCurrent().addAsyncErrorRule(logic);
	}
	addMetadataRule(key, logic) {
		this.getCurrent().addMetadataRule(key, logic);
	}
	getChild(key) {
		if (key === DYNAMIC) {
			const children = this.getCurrent().children;
			if (children.size > (children.has(DYNAMIC) ? 1 : 0)) this.current = void 0;
		}
		return this.getCurrent().getChild(key);
	}
	hasLogic(builder) {
		if (this === builder) return true;
		return this.all.some(({ builder: subBuilder }) => subBuilder.hasLogic(builder));
	}
	hasRules() {
		return this.all.length > 0;
	}
	anyChildHasLogic() {
		return this.all.some(({ builder }) => builder.anyChildHasLogic());
	}
	mergeIn(other, predicate) {
		if (predicate) this.all.push({
			builder: other,
			predicate: {
				fn: setBoundPathDepthForResolution(predicate.fn, this.depth),
				path: predicate.path
			}
		});
		else this.all.push({ builder: other });
		this.current = void 0;
	}
	getCurrent() {
		if (this.current === void 0) {
			this.current = new NonMergeableLogicNodeBuilder(this.depth);
			this.all.push({ builder: this.current });
		}
		return this.current;
	}
	static newRoot() {
		return new LogicNodeBuilder(0);
	}
};
var NonMergeableLogicNodeBuilder = class extends AbstractLogicNodeBuilder {
	constructor(depth) {
		super(depth);
		_defineProperty(this, "logic", new LogicContainer([]));
		_defineProperty(this, "children", /* @__PURE__ */ new Map());
	}
	addHiddenRule(logic) {
		this.logic.hidden.push(setBoundPathDepthForResolution(logic, this.depth));
	}
	addDisabledReasonRule(logic) {
		this.logic.disabledReasons.push(setBoundPathDepthForResolution(logic, this.depth));
	}
	addReadonlyRule(logic) {
		this.logic.readonly.push(setBoundPathDepthForResolution(logic, this.depth));
	}
	addSyncErrorRule(logic) {
		this.logic.syncErrors.push(setBoundPathDepthForResolution(logic, this.depth));
	}
	addSyncTreeErrorRule(logic) {
		this.logic.syncTreeErrors.push(setBoundPathDepthForResolution(logic, this.depth));
	}
	addAsyncErrorRule(logic) {
		this.logic.asyncErrors.push(setBoundPathDepthForResolution(logic, this.depth));
	}
	addMetadataRule(key, logic) {
		this.logic.getMetadata(key).push(setBoundPathDepthForResolution(logic, this.depth));
	}
	getChild(key) {
		if (!this.children.has(key)) this.children.set(key, new LogicNodeBuilder(this.depth + 1));
		return this.children.get(key);
	}
	hasLogic(builder) {
		return this === builder;
	}
	hasRules() {
		return this.logic.hasAnyLogic() || this.children.size > 0;
	}
	anyChildHasLogic() {
		for (const child of this.children.values()) if (child.hasRules()) return true;
		return false;
	}
};
var LeafLogicNode = class LeafLogicNode {
	constructor(builder, predicates, depth) {
		_defineProperty(this, "builder", void 0);
		_defineProperty(this, "predicates", void 0);
		_defineProperty(this, "depth", void 0);
		_defineProperty(this, "logic", void 0);
		this.builder = builder;
		this.predicates = predicates;
		this.depth = depth;
		this.logic = builder ? createLogic(builder, predicates, depth) : new LogicContainer([]);
	}
	getChild(key) {
		const childBuilders = this.builder ? getAllChildBuilders(this.builder, key) : [];
		if (childBuilders.length === 0) return new LeafLogicNode(void 0, [], this.depth + 1);
		else if (childBuilders.length === 1) {
			const { builder, predicates } = childBuilders[0];
			return new LeafLogicNode(builder, [...this.predicates, ...predicates.map((p) => bindLevel(p, this.depth))], this.depth + 1);
		} else return new CompositeLogicNode(childBuilders.map(({ builder, predicates }) => new LeafLogicNode(builder, [...this.predicates, ...predicates.map((p) => bindLevel(p, this.depth))], this.depth + 1)));
	}
	hasLogic(builder) {
		if (!this.builder) return false;
		return this.builder.hasLogic(builder);
	}
	hasRules() {
		return this.builder ? this.builder.hasRules() : false;
	}
	anyChildHasLogic() {
		return this.builder ? this.builder.anyChildHasLogic() : false;
	}
};
var CompositeLogicNode = class CompositeLogicNode {
	constructor(all) {
		_defineProperty(this, "all", void 0);
		_defineProperty(this, "logic", void 0);
		this.all = all;
		this.logic = new LogicContainer([]);
		for (const node of all) this.logic.mergeIn(node.logic);
	}
	getChild(key) {
		return new CompositeLogicNode(this.all.flatMap((child) => child.getChild(key)));
	}
	hasLogic(builder) {
		return this.all.some((node) => node.hasLogic(builder));
	}
	hasRules() {
		return this.all.some((node) => node.hasRules());
	}
	anyChildHasLogic() {
		return this.all.some((child) => child.anyChildHasLogic());
	}
};
function getAllChildBuilders(builder, key) {
	if (builder instanceof LogicNodeBuilder) return builder.all.flatMap(({ builder, predicate }) => {
		const children = getAllChildBuilders(builder, key);
		if (predicate) return children.map(({ builder, predicates }) => ({
			builder,
			predicates: [...predicates, predicate]
		}));
		return children;
	});
	else if (builder instanceof NonMergeableLogicNodeBuilder) return [...key !== DYNAMIC && builder.children.has(DYNAMIC) ? [{
		builder: builder.getChild(DYNAMIC),
		predicates: []
	}] : [], ...builder.children.has(key) ? [{
		builder: builder.getChild(key),
		predicates: []
	}] : []];
	else throw new RuntimeError(1909, ngDevMode && "Unknown LogicNodeBuilder type");
}
function createLogic(builder, predicates, depth) {
	const logic = new LogicContainer(predicates);
	if (builder instanceof LogicNodeBuilder) {
		const builtNodes = builder.all.map(({ builder, predicate }) => new LeafLogicNode(builder, predicate ? [...predicates, bindLevel(predicate, depth)] : predicates, depth));
		for (const node of builtNodes) logic.mergeIn(node.logic);
	} else if (builder instanceof NonMergeableLogicNodeBuilder) logic.mergeIn(builder.logic);
	else throw new RuntimeError(1909, ngDevMode && "Unknown LogicNodeBuilder type");
	return logic;
}
function bindLevel(predicate, depth) {
	return _objectSpread2(_objectSpread2({}, predicate), {}, { depth });
}
var PATH = Symbol("PATH");
var FieldPathNode = class FieldPathNode {
	constructor(keys, root, parent, keyInParent) {
		_defineProperty(this, "keys", void 0);
		_defineProperty(this, "parent", void 0);
		_defineProperty(this, "keyInParent", void 0);
		_defineProperty(this, "root", void 0);
		_defineProperty(this, "children", /* @__PURE__ */ new Map());
		_defineProperty(this, "fieldPathProxy", new Proxy(this, FIELD_PATH_PROXY_HANDLER));
		_defineProperty(this, "logicBuilder", void 0);
		this.keys = keys;
		this.parent = parent;
		this.keyInParent = keyInParent;
		this.root = root !== null && root !== void 0 ? root : this;
		if (!parent) this.logicBuilder = LogicNodeBuilder.newRoot();
	}
	get builder() {
		if (this.logicBuilder) return this.logicBuilder;
		return this.parent.builder.getChild(this.keyInParent);
	}
	getChild(key) {
		if (!this.children.has(key)) this.children.set(key, new FieldPathNode([...this.keys, key], this.root, this, key));
		return this.children.get(key);
	}
	mergeIn(other, predicate) {
		const path = other.compile();
		this.builder.mergeIn(path.builder, predicate);
	}
	static unwrapFieldPath(formPath) {
		return formPath[PATH];
	}
	static newRoot() {
		return new FieldPathNode([], void 0, void 0, void 0);
	}
};
var FIELD_PATH_PROXY_HANDLER = { get(node, property) {
	if (property === PATH) return node;
	return node.getChild(property).fieldPathProxy;
} };
var currentCompilingNode = void 0;
var compiledSchemas = /* @__PURE__ */ new Map();
var SchemaImpl = class SchemaImpl {
	constructor(schemaFn) {
		_defineProperty(this, "schemaFn", void 0);
		this.schemaFn = schemaFn;
	}
	compile() {
		if (compiledSchemas.has(this)) return compiledSchemas.get(this);
		const path = FieldPathNode.newRoot();
		compiledSchemas.set(this, path);
		let prevCompilingNode = currentCompilingNode;
		try {
			currentCompilingNode = path;
			this.schemaFn(path.fieldPathProxy);
		} finally {
			currentCompilingNode = prevCompilingNode;
		}
		return path;
	}
	static create(schema) {
		if (schema instanceof SchemaImpl) return schema;
		return new SchemaImpl(schema);
	}
	static rootCompile(schema) {
		try {
			compiledSchemas.clear();
			if (schema === void 0) return FieldPathNode.newRoot();
			if (schema instanceof SchemaImpl) return schema.compile();
			return new SchemaImpl(schema).compile();
		} finally {
			compiledSchemas.clear();
		}
	}
};
function isSchemaOrSchemaFn(value) {
	return value instanceof SchemaImpl || typeof value === "function";
}
function assertPathIsCurrent(path) {
	if (currentCompilingNode !== FieldPathNode.unwrapFieldPath(path).root) throw new RuntimeError(1908, ngDevMode && `A FieldPath can only be used directly within the Schema that owns it, **not** outside of it or within a sub-schema.`);
}
function metadata(path, key, logic) {
	assertPathIsCurrent(path);
	FieldPathNode.unwrapFieldPath(path).builder.addMetadataRule(key, logic);
	return key;
}
var MetadataReducer = {
	list() {
		return {
			reduce: (acc, item) => item === void 0 ? acc : [...acc, item],
			getInitial: () => []
		};
	},
	min() {
		return {
			reduce: (acc, item) => {
				if (acc === void 0 || item === void 0) return acc !== null && acc !== void 0 ? acc : item;
				return item < acc ? item : acc;
			},
			getInitial: () => void 0
		};
	},
	max() {
		return {
			reduce: (acc, item) => {
				if (acc === void 0 || item === void 0) return acc !== null && acc !== void 0 ? acc : item;
				return item > acc ? item : acc;
			},
			getInitial: () => void 0
		};
	},
	or() {
		return {
			reduce: (prev, next) => prev || next,
			getInitial: () => false
		};
	},
	and() {
		return {
			reduce: (prev, next) => prev && next,
			getInitial: () => true
		};
	},
	override
};
function override(getInitial) {
	return {
		reduce: (_, item) => item,
		getInitial: () => getInitial === null || getInitial === void 0 ? void 0 : getInitial()
	};
}
var IS_ASYNC_VALIDATION_RESOURCE = Symbol("IS_ASYNC_VALIDATION_RESOURCE");
var MetadataKey = class {
	constructor(reducer, create) {
		_defineProperty(this, "reducer", void 0);
		_defineProperty(this, "create", void 0);
		_defineProperty(this, "brand", void 0);
		_defineProperty(this, IS_ASYNC_VALIDATION_RESOURCE, void 0);
		this.reducer = reducer;
		this.create = create;
	}
};
function createMetadataKey(reducer) {
	return new MetadataKey(reducer !== null && reducer !== void 0 ? reducer : MetadataReducer.override());
}
function createManagedMetadataKey(create, reducer) {
	return new MetadataKey(reducer !== null && reducer !== void 0 ? reducer : MetadataReducer.override(), create);
}
function createLimitSelectionKey() {
	return createMetadataKey();
}
var REQUIRED = createMetadataKey(MetadataReducer.or());
var MIN = createLimitSelectionKey();
var MIN_DATE = createMetadataKey(MetadataReducer.max());
var MIN_NUMBER = createMetadataKey(MetadataReducer.max());
var MAX = createLimitSelectionKey();
var MAX_DATE = createMetadataKey(MetadataReducer.min());
var MAX_NUMBER = createMetadataKey(MetadataReducer.min());
var MIN_LENGTH = createMetadataKey(MetadataReducer.max());
var MAX_LENGTH = createMetadataKey(MetadataReducer.min());
var PATTERN = createMetadataKey(MetadataReducer.list());
function shallowArrayEquals(a, b) {
	if (a === b) return true;
	if (!a || !b) return false;
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) if (!Object.is(a[i], b[i])) return false;
	return true;
}
function calculateValidationSelfStatus(state) {
	if (state.errors().length > 0) return "invalid";
	if (state.pending()) return "unknown";
	return "valid";
}
var FieldValidationState = class {
	constructor(node) {
		_defineProperty(this, "node", void 0);
		_defineProperty(this, "rawSyncTreeErrors", computed(() => {
			var _this$node$structure$, _this$node$structure$2;
			if (this.shouldSkipValidation()) return [];
			return [...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context), ...(_this$node$structure$ = (_this$node$structure$2 = this.node.structure.parent) === null || _this$node$structure$2 === void 0 ? void 0 : _this$node$structure$2.validationState.rawSyncTreeErrors()) !== null && _this$node$structure$ !== void 0 ? _this$node$structure$ : []];
		}, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "rawSyncTreeErrors" } : {}), {}, { equal: shallowArrayEquals })));
		_defineProperty(this, "syncErrors", computed(() => {
			if (this.shouldSkipValidation()) return [];
			return [
				...this.node.logicNode.logic.syncErrors.compute(this.node.context),
				...this.syncTreeErrors(),
				...normalizeErrors$1(this.node.submitState.submissionErrors())
			];
		}, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "syncErrors" } : {}), {}, { equal: shallowArrayEquals })));
		_defineProperty(this, "syncValid", computed(() => {
			if (this.shouldSkipValidation()) return true;
			return this.node.structure.reduceChildren(this.syncErrors().length === 0, (child, value) => value && child.validationState.syncValid(), shortCircuitFalse);
		}, ...ngDevMode ? [{ debugName: "syncValid" }] : []));
		_defineProperty(this, "syncTreeErrors", computed(() => this.rawSyncTreeErrors().filter((err) => err.fieldTree === this.node.fieldTree), _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "syncTreeErrors" } : {}), {}, { equal: shallowArrayEquals })));
		_defineProperty(this, "rawAsyncErrors", computed(() => {
			var _this$node$structure$3, _this$node$structure$4;
			if (this.shouldSkipValidation()) return [];
			return [...this.node.logicNode.logic.asyncErrors.compute(this.node.context), ...(_this$node$structure$3 = (_this$node$structure$4 = this.node.structure.parent) === null || _this$node$structure$4 === void 0 ? void 0 : _this$node$structure$4.validationState.rawAsyncErrors()) !== null && _this$node$structure$3 !== void 0 ? _this$node$structure$3 : []];
		}, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "rawAsyncErrors" } : {}), {}, { equal: shallowArrayEquals })));
		_defineProperty(this, "asyncErrors", computed(() => {
			if (this.shouldSkipValidation()) return [];
			return this.rawAsyncErrors().filter((err) => err === "pending" || err.fieldTree === this.node.fieldTree);
		}, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "asyncErrors" } : {}), {}, { equal: shallowArrayEquals })));
		_defineProperty(this, "parseErrors", computed(() => this.node.formFieldBindings().flatMap((field) => field.parseErrors()), _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "parseErrors" } : {}), {}, { equal: shallowArrayEquals })));
		_defineProperty(this, "errors", computed(() => [
			...this.parseErrors(),
			...this.syncErrors(),
			...this.asyncErrors().filter((err) => err !== "pending")
		], _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "errors" } : {}), {}, { equal: shallowArrayEquals })));
		_defineProperty(this, "errorSummary", computed(() => {
			const errors = this.node.structure.reduceChildren(this.errors(), (child, result) => [...result, ...child.errorSummary()]);
			untracked(() => errors.sort(compareErrorPosition));
			return errors;
		}, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "errorSummary" } : {}), {}, { equal: shallowArrayEquals })));
		_defineProperty(this, "pending", computed(() => this.node.structure.reduceChildren(this.asyncErrors().includes("pending"), (child, value) => value || child.validationState.pending()), ...ngDevMode ? [{ debugName: "pending" }] : []));
		_defineProperty(this, "status", computed(() => {
			if (this.shouldSkipValidation()) return "valid";
			let ownStatus = calculateValidationSelfStatus(this);
			return this.node.structure.reduceChildren(ownStatus, (child, value) => {
				if (value === "invalid" || child.validationState.status() === "invalid") return "invalid";
				else if (value === "unknown" || child.validationState.status() === "unknown") return "unknown";
				return "valid";
			}, (v) => v === "invalid");
		}, ...ngDevMode ? [{ debugName: "status" }] : []));
		_defineProperty(this, "valid", computed(() => this.status() === "valid", ...ngDevMode ? [{ debugName: "valid" }] : []));
		_defineProperty(this, "invalid", computed(() => this.status() === "invalid", ...ngDevMode ? [{ debugName: "invalid" }] : []));
		_defineProperty(this, "shouldSkipValidation", computed(() => this.node.hidden() || this.node.disabled() || this.node.readonly() || this.node.structure.isOrphaned(), ...ngDevMode ? [{ debugName: "shouldSkipValidation" }] : []));
		this.node = node;
	}
};
function normalizeErrors$1(error) {
	if (error === void 0) return [];
	if (isArray(error)) return error;
	return [error];
}
function addDefaultField(errors, fieldTree) {
	if (isArray(errors)) for (const error of errors) {
		var _error$fieldTree;
		(_error$fieldTree = error.fieldTree) !== null && _error$fieldTree !== void 0 || (error.fieldTree = fieldTree);
	}
	else if (errors) {
		var _errors$fieldTree;
		(_errors$fieldTree = errors.fieldTree) !== null && _errors$fieldTree !== void 0 || (errors.fieldTree = fieldTree);
	}
	return errors;
}
function getFirstBoundElement(error) {
	if (error.formField) return error.formField.element;
	return error.fieldTree().formFieldBindings().reduce((el, binding) => {
		if (!el || !binding.element) return el !== null && el !== void 0 ? el : binding.element;
		return el.compareDocumentPosition(binding.element) & Node.DOCUMENT_POSITION_PRECEDING ? binding.element : el;
	}, void 0);
}
function compareErrorPosition(a, b) {
	const aEl = getFirstBoundElement(a);
	const bEl = getFirstBoundElement(b);
	if (aEl === bEl) return 0;
	if (aEl === void 0 || bEl === void 0) return aEl === void 0 ? 1 : -1;
	return aEl.compareDocumentPosition(bEl) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1;
}
var DEBOUNCER = createMetadataKey();
var FieldNodeContext = class {
	constructor(node) {
		_defineProperty(this, "node", void 0);
		_defineProperty(this, "cache", /* @__PURE__ */ new WeakMap());
		_defineProperty(this, "index", computed(() => {
			const key = this.key();
			if (!isArray(untracked(this.node.structure.parent.value))) throw new RuntimeError(1906, ngDevMode && "Cannot access index, parent field is not an array.");
			return Number(key);
		}, ...ngDevMode ? [{ debugName: "index" }] : []));
		_defineProperty(this, "valueOf", (p) => {
			const result = this.resolve(p)().value();
			if (result instanceof AbstractControl) throw new RuntimeError(1907, ngDevMode && `Tried to read an 'AbstractControl' value from a 'form()'. Did you mean to use 'compatForm()' instead?`);
			return result;
		});
		this.node = node;
		this.fieldTreeOf = this.fieldTreeOf.bind(this);
		this.stateOf = this.stateOf.bind(this);
	}
	resolve(target) {
		if (!this.cache.has(target)) {
			const resolver = computed(() => {
				const targetPathNode = FieldPathNode.unwrapFieldPath(target);
				let field = this.node;
				let stepsRemaining = getBoundPathDepth();
				while (stepsRemaining > 0 || !field.structure.logic.hasLogic(targetPathNode.root.builder)) {
					stepsRemaining--;
					field = field.structure.parent;
					if (field === void 0) throw new RuntimeError(1900, ngDevMode && "Path is not part of this field tree.");
				}
				for (let key of targetPathNode.keys) {
					field = field.structure.getChild(key);
					if (field === void 0) throw new RuntimeError(1901, ngDevMode && `Cannot resolve path .${targetPathNode.keys.join(".")} relative to field ${["<root>", ...this.node.structure.pathKeys()].join(".")}.`);
				}
				return field.fieldTree;
			}, ...ngDevMode ? [{ debugName: "resolver" }] : []);
			this.cache.set(target, resolver);
		}
		return this.cache.get(target)();
	}
	get fieldTree() {
		return this.node.fieldProxy;
	}
	get state() {
		return this.node;
	}
	get value() {
		return this.node.structure.value;
	}
	get key() {
		return this.node.structure.keyInParent;
	}
	get pathKeys() {
		return this.node.structure.pathKeys;
	}
	fieldTreeOf(p) {
		return this.resolve(p);
	}
	stateOf(p) {
		return this.resolve(p)();
	}
};
var FieldMetadataState = class {
	constructor(node) {
		_defineProperty(this, "node", void 0);
		_defineProperty(this, "metadata", /* @__PURE__ */ new Map());
		this.node = node;
	}
	runMetadataCreateLifecycle() {
		if (!this.node.logicNode.logic.hasMetadataKeys()) return;
		const wasInParams = isInParamsFunction();
		if (wasInParams) setInParamsFunction(false);
		try {
			untracked(() => runInInjectionContext(this.node.structure.injector, () => {
				for (const key of this.node.logicNode.logic.getMetadataKeys()) if (key.create) {
					const logic = this.node.logicNode.logic.getMetadata(key);
					const result = key.create(this.node, computed(() => logic.compute(this.node.context)));
					this.metadata.set(key, result);
				}
			}));
		} finally {
			if (wasInParams) setInParamsFunction(true);
		}
	}
	get(key) {
		if (this.has(key)) {
			if (!this.metadata.has(key)) {
				if (key.create) throw new RuntimeError(1912, ngDevMode && "Managed metadata cannot be created lazily");
				const logic = this.node.logicNode.logic.getMetadata(key);
				this.metadata.set(key, computed(() => logic.compute(this.node.context)));
			}
		}
		return this.metadata.get(key);
	}
	has(key) {
		return this.node.logicNode.logic.hasMetadata(key);
	}
};
var FIELD_PROXY_HANDLER = {
	get(getTgt, property, receiver) {
		if (property === FIELD_TREE) return true;
		const tgt = getTgt();
		const child = tgt.structure.getChild(property);
		if (child !== void 0) return child.fieldTree;
		const value = untracked(tgt.value);
		if (isArray(value)) {
			if (property === "length") return tgt.value().length;
			if (property === Symbol.iterator) return () => {
				tgt.value();
				return Array.prototype[Symbol.iterator].apply(tgt.fieldTree);
			};
		}
		if (isObject(value)) {
			if (property === Symbol.iterator) return function* () {
				for (const key in receiver) yield [key, receiver[key]];
			};
		}
	},
	getOwnPropertyDescriptor(getTgt, prop) {
		const value = untracked(getTgt().value);
		const desc = Reflect.getOwnPropertyDescriptor(value, prop);
		if (desc && !desc.configurable) desc.configurable = true;
		return desc;
	},
	ownKeys(getTgt) {
		const value = untracked(getTgt().value);
		return typeof value === "object" && value !== null ? Reflect.ownKeys(value) : [];
	}
};
function deepSignal(source, prop) {
	const read = computed(() => source()[prop()]);
	read[SIGNAL] = source[SIGNAL];
	read.set = (value) => {
		if (Object.is(untracked(read), value)) return;
		source.update((current) => valueForWrite(current, value, prop()));
	};
	read.update = (fn) => {
		read.set(fn(untracked(read)));
	};
	read.asReadonly = () => read;
	return read;
}
function valueForWrite(sourceValue, newPropValue, prop) {
	if (isArray(sourceValue)) {
		const newValue = [...sourceValue];
		newValue[prop] = newPropValue;
		return newValue;
	} else return _objectSpread2(_objectSpread2({}, sourceValue), {}, { [prop]: newPropValue });
}
var ORPHAN_TOKEN = Symbol(typeof ngDevMode !== "undefined" && ngDevMode ? "ORPHAN_TOKEN" : "");
var FALSE_SIGNAL = computed(() => false, ...ngDevMode ? [{ debugName: "FALSE_SIGNAL" }] : []);
var FieldNodeStructure = class {
	get injector() {
		var _this$_injector;
		(_this$_injector = this._injector) !== null && _this$_injector !== void 0 || (this._injector = Injector.create({
			providers: [],
			parent: this.fieldManager.injector
		}));
		return this._injector;
	}
	constructor(logic, node, createChildNode) {
		_defineProperty(this, "logic", void 0);
		_defineProperty(this, "node", void 0);
		_defineProperty(this, "createChildNode", void 0);
		_defineProperty(this, "identitySymbol", Symbol());
		_defineProperty(this, "_injector", void 0);
		_defineProperty(this, "_anyChildHasLogic", void 0);
		this.logic = logic;
		this.node = node;
		this.createChildNode = createChildNode;
	}
	children() {
		this.ensureChildrenMap();
		const map = this.childrenMap();
		if (map === void 0) return [];
		return Array.from(map.byPropertyKey.values()).map((child) => untracked(child.reader));
	}
	materializedChildren() {
		const map = this.childrenMap();
		if (map === void 0) return [];
		return Array.from(map.byPropertyKey.values()).map((child) => child.node);
	}
	_areChildrenMaterialized() {
		return untracked(this.childrenMap) !== void 0;
	}
	ensureChildrenMap() {
		if (this._areChildrenMaterialized()) return;
		untracked(() => {
			this.childrenMap.update((current) => this.computeChildrenMap(this.value(), current, true));
		});
	}
	getChild(key) {
		var _untracked;
		this.ensureChildrenMap();
		const strKey = key.toString();
		let reader = (_untracked = untracked(this.childrenMap)) === null || _untracked === void 0 || (_untracked = _untracked.byPropertyKey.get(strKey)) === null || _untracked === void 0 ? void 0 : _untracked.reader;
		if (!reader) reader = this.createReader(strKey);
		return reader();
	}
	reduceChildren(initialValue, fn, shortCircuit) {
		const map = this.childrenMap();
		if (!map) return initialValue;
		let value = initialValue;
		for (const child of map.byPropertyKey.values()) {
			if (shortCircuit === null || shortCircuit === void 0 ? void 0 : shortCircuit(value)) break;
			value = fn(untracked(child.reader), value);
		}
		return value;
	}
	destroy() {
		this.injector.destroy();
	}
	createKeyOrOrphanSignals(kind, identityInParent, initialKeyInParent) {
		if (kind === "root") return {
			keyInParent: ROOT_KEY_IN_PARENT,
			isOrphaned: FALSE_SIGNAL
		};
		const parent = this.parent;
		let lastKnownKey = initialKeyInParent;
		const keyOrOrphan = computed(() => {
			if (parent.structure.isOrphaned()) return ORPHAN_TOKEN;
			const map = parent.structure.childrenMap();
			if (!map) return ORPHAN_TOKEN;
			const lastKnownChild = map.byPropertyKey.get(lastKnownKey);
			if (lastKnownChild && lastKnownChild.node === this.node) return lastKnownKey;
			if (identityInParent === void 0) return ORPHAN_TOKEN;
			else {
				for (const [key, child] of map.byPropertyKey) if (child.node === this.node) return lastKnownKey = key;
				return ORPHAN_TOKEN;
			}
		}, ...ngDevMode ? [{ debugName: "keyOrOrphan" }] : []);
		const isOrphaned = computed(() => keyOrOrphan() === ORPHAN_TOKEN, ...ngDevMode ? [{ debugName: "isOrphaned" }] : []);
		return {
			keyInParent: computed(() => {
				const key = keyOrOrphan();
				if (key === ORPHAN_TOKEN) {
					if (identityInParent === void 0) throw new RuntimeError(-1902, ngDevMode && `Orphan field, looking for property '${initialKeyInParent}' of ${getDebugName(parent)}`);
					else throw new RuntimeError(1904, ngDevMode && `Orphan field, can't find element in array ${getDebugName(parent)}`);
				}
				return key;
			}, ...ngDevMode ? [{ debugName: "keyInParent" }] : []),
			isOrphaned
		};
	}
	createChildrenMap() {
		return linkedSignal({
			source: this.value,
			computation: (value, previous) => this.computeChildrenMap(value, previous === null || previous === void 0 ? void 0 : previous.value, false)
		});
	}
	computeChildrenMap(value, prevData, forceMaterialize) {
		var _prevData, _materializedChildren8;
		if (!isObject(value)) return;
		if (!forceMaterialize && prevData === void 0) {
			var _this$_anyChildHasLog;
			if (!((_this$_anyChildHasLog = this._anyChildHasLogic) !== null && _this$_anyChildHasLog !== void 0 ? _this$_anyChildHasLog : this._anyChildHasLogic = this.logic.anyChildHasLogic())) return;
		}
		(_prevData = prevData) !== null && _prevData !== void 0 || (prevData = { byPropertyKey: /* @__PURE__ */ new Map() });
		let materializedChildren;
		const parentIsArray = isArray(value);
		if (prevData !== void 0) {
			if (parentIsArray) materializedChildren = maybeRemoveStaleArrayFields(prevData, value, this.identitySymbol);
			else materializedChildren = maybeRemoveStaleObjectFields(prevData, value);
		}
		for (const key of Object.keys(value)) {
			let trackingKey = void 0;
			const childValue = value[key];
			if (childValue === void 0) {
				if (prevData.byPropertyKey.has(key)) {
					var _materializedChildren;
					(_materializedChildren = materializedChildren) !== null && _materializedChildren !== void 0 || (materializedChildren = _objectSpread2({}, prevData));
					materializedChildren.byPropertyKey.delete(key);
				}
				continue;
			}
			if (parentIsArray && isObject(childValue) && !isArray(childValue)) {
				var _this$identitySymbol, _childValue$_this$ide;
				trackingKey = (_childValue$_this$ide = childValue[_this$identitySymbol = this.identitySymbol]) !== null && _childValue$_this$ide !== void 0 ? _childValue$_this$ide : childValue[_this$identitySymbol] = Symbol(ngDevMode ? `id:${globalId++}` : "");
			}
			let childNode;
			if (trackingKey) {
				var _prevData$byTrackingK, _materializedChildren5;
				if (!((_prevData$byTrackingK = prevData.byTrackingKey) === null || _prevData$byTrackingK === void 0 ? void 0 : _prevData$byTrackingK.has(trackingKey))) {
					var _materializedChildren2, _materializedChildren3, _materializedChildren4;
					(_materializedChildren2 = materializedChildren) !== null && _materializedChildren2 !== void 0 || (materializedChildren = _objectSpread2({}, prevData));
					(_materializedChildren4 = (_materializedChildren3 = materializedChildren).byTrackingKey) !== null && _materializedChildren4 !== void 0 || (_materializedChildren3.byTrackingKey = /* @__PURE__ */ new Map());
					materializedChildren.byTrackingKey.set(trackingKey, this.createChildNode(key, trackingKey, parentIsArray));
				}
				childNode = ((_materializedChildren5 = materializedChildren) !== null && _materializedChildren5 !== void 0 ? _materializedChildren5 : prevData).byTrackingKey.get(trackingKey);
			}
			const child = prevData.byPropertyKey.get(key);
			if (child === void 0) {
				var _materializedChildren6, _childNode;
				(_materializedChildren6 = materializedChildren) !== null && _materializedChildren6 !== void 0 || (materializedChildren = _objectSpread2({}, prevData));
				materializedChildren.byPropertyKey.set(key, {
					reader: this.createReader(key),
					node: (_childNode = childNode) !== null && _childNode !== void 0 ? _childNode : this.createChildNode(key, trackingKey, parentIsArray)
				});
			} else if (childNode && childNode !== child.node) {
				var _materializedChildren7;
				(_materializedChildren7 = materializedChildren) !== null && _materializedChildren7 !== void 0 || (materializedChildren = _objectSpread2({}, prevData));
				child.node = childNode;
			}
		}
		return (_materializedChildren8 = materializedChildren) !== null && _materializedChildren8 !== void 0 ? _materializedChildren8 : prevData;
	}
	createReader(key) {
		return computed(() => {
			var _this$childrenMap;
			return (_this$childrenMap = this.childrenMap()) === null || _this$childrenMap === void 0 || (_this$childrenMap = _this$childrenMap.byPropertyKey.get(key)) === null || _this$childrenMap === void 0 ? void 0 : _this$childrenMap.node;
		});
	}
};
var RootFieldNodeStructure = class extends FieldNodeStructure {
	get parent() {}
	get root() {
		return this.node;
	}
	get pathKeys() {
		return ROOT_PATH_KEYS;
	}
	get keyInParent() {
		return ROOT_KEY_IN_PARENT;
	}
	constructor(node, logic, fieldManager, value, createChildNode) {
		super(logic, node, createChildNode);
		_defineProperty(this, "fieldManager", void 0);
		_defineProperty(this, "value", void 0);
		_defineProperty(this, "isOrphaned", FALSE_SIGNAL);
		_defineProperty(this, "childrenMap", void 0);
		this.fieldManager = fieldManager;
		this.value = value;
		this.childrenMap = this.createChildrenMap();
	}
};
var ChildFieldNodeStructure = class extends FieldNodeStructure {
	get fieldManager() {
		return this.root.structure.fieldManager;
	}
	constructor(node, logic, parent, identityInParent, initialKeyInParent, createChildNode) {
		super(logic, node, createChildNode);
		_defineProperty(this, "logic", void 0);
		_defineProperty(this, "parent", void 0);
		_defineProperty(this, "root", void 0);
		_defineProperty(this, "pathKeys", void 0);
		_defineProperty(this, "keyInParent", void 0);
		_defineProperty(this, "value", void 0);
		_defineProperty(this, "childrenMap", void 0);
		_defineProperty(this, "isOrphaned", void 0);
		this.logic = logic;
		this.parent = parent;
		this.root = this.parent.structure.root;
		const signals = this.createKeyOrOrphanSignals("child", identityInParent, initialKeyInParent);
		this.isOrphaned = signals.isOrphaned;
		this.keyInParent = signals.keyInParent;
		this.pathKeys = computed(() => [...parent.structure.pathKeys(), this.keyInParent()], ...ngDevMode ? [{ debugName: "pathKeys" }] : []);
		this.value = deepSignal(this.parent.structure.value, this.keyInParent);
		this.childrenMap = this.createChildrenMap();
		this.fieldManager.structures.add(this);
	}
};
var globalId = 0;
var ROOT_PATH_KEYS = computed(() => [], ...ngDevMode ? [{ debugName: "ROOT_PATH_KEYS" }] : []);
var ROOT_KEY_IN_PARENT = computed(() => {
	throw new RuntimeError(1905, ngDevMode && "The top-level field in the form has no parent.");
}, ...ngDevMode ? [{ debugName: "ROOT_KEY_IN_PARENT" }] : []);
function getDebugName(node) {
	return `<root>.${node.structure.pathKeys().join(".")}`;
}
function maybeRemoveStaleArrayFields(prevData, value, identitySymbol) {
	let data;
	const oldKeys = new Set(prevData.byPropertyKey.keys());
	const oldTracking = prevData.byTrackingKey && new Set(prevData.byTrackingKey.keys());
	for (let i = 0; i < value.length; i++) {
		const childValue = value[i];
		oldKeys.delete(i.toString());
		if (oldTracking && isObject(childValue) && Object.hasOwn(childValue, identitySymbol)) oldTracking.delete(childValue[identitySymbol]);
	}
	if (oldKeys.size > 0) {
		var _data;
		(_data = data) !== null && _data !== void 0 || (data = _objectSpread2({}, prevData));
		for (const key of oldKeys) data.byPropertyKey.delete(key);
	}
	if (oldTracking && oldTracking.size > 0) {
		var _data2;
		(_data2 = data) !== null && _data2 !== void 0 || (data = _objectSpread2({}, prevData));
		for (const id of oldTracking) data.byTrackingKey.delete(id);
	}
	return data;
}
function maybeRemoveStaleObjectFields(prevData, value) {
	let data;
	for (const key of prevData.byPropertyKey.keys()) if (!Object.hasOwn(value, key)) {
		var _data3;
		(_data3 = data) !== null && _data3 !== void 0 || (data = _objectSpread2({}, prevData));
		data.byPropertyKey.delete(key);
	}
	return data;
}
var FieldSubmitState = class {
	constructor(node) {
		_defineProperty(this, "node", void 0);
		_defineProperty(this, "selfSubmitting", signal(false, ...ngDevMode ? [{ debugName: "selfSubmitting" }] : []));
		_defineProperty(this, "submissionErrors", void 0);
		_defineProperty(this, "submitting", computed(() => {
			var _this$node$structure$5, _this$node$structure$6;
			return this.selfSubmitting() || ((_this$node$structure$5 = (_this$node$structure$6 = this.node.structure.parent) === null || _this$node$structure$6 === void 0 ? void 0 : _this$node$structure$6.submitting()) !== null && _this$node$structure$5 !== void 0 ? _this$node$structure$5 : false);
		}, ...ngDevMode ? [{ debugName: "submitting" }] : []));
		this.node = node;
		this.submissionErrors = linkedSignal(_objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "submissionErrors" } : {}), {}, {
			source: this.node.structure.value,
			computation: () => []
		}));
	}
};
var FieldNode = class {
	get context() {
		var _this$_context;
		return (_this$_context = this._context) !== null && _this$_context !== void 0 ? _this$_context : this._context = new FieldNodeContext(this);
	}
	constructor(options) {
		_defineProperty(this, "structure", void 0);
		_defineProperty(this, "validationState", void 0);
		_defineProperty(this, "metadataState", void 0);
		_defineProperty(this, "nodeState", void 0);
		_defineProperty(this, "submitState", void 0);
		_defineProperty(this, "fieldAdapter", void 0);
		_defineProperty(this, "controlValue", void 0);
		_defineProperty(this, "_context", void 0);
		_defineProperty(this, "fieldProxy", new Proxy(() => this, FIELD_PROXY_HANDLER));
		_defineProperty(this, "pathNode", void 0);
		_defineProperty(this, "pendingSync", linkedSignal(_objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "pendingSync" } : {}), {}, {
			source: () => this.value(),
			computation: (_source, previous) => {
				var _previous$value;
				previous === null || previous === void 0 || (_previous$value = previous.value) === null || _previous$value === void 0 || _previous$value.abort();
			}
		})));
		this.pathNode = options.pathNode;
		this.fieldAdapter = options.fieldAdapter;
		this.structure = this.fieldAdapter.createStructure(this, options);
		this.validationState = this.fieldAdapter.createValidationState(this, options);
		this.nodeState = this.fieldAdapter.createNodeState(this, options);
		this.metadataState = new FieldMetadataState(this);
		this.submitState = new FieldSubmitState(this);
		this.controlValue = this.controlValueSignal();
		this.metadataState.runMetadataCreateLifecycle();
	}
	focusBoundControl(options) {
		var _this$getBindingForFo;
		(_this$getBindingForFo = this.getBindingForFocus()) === null || _this$getBindingForFo === void 0 || _this$getBindingForFo.focus(options);
	}
	getBindingForFocus() {
		const own = this.formFieldBindings().filter((b) => b.focus !== void 0).reduce(firstInDom, void 0);
		if (own) return own;
		return this.structure.children().map((child) => child.getBindingForFocus()).reduce(firstInDom, void 0);
	}
	get fieldTree() {
		return this.fieldProxy;
	}
	get logicNode() {
		return this.structure.logic;
	}
	get value() {
		return this.structure.value;
	}
	get keyInParent() {
		return this.structure.keyInParent;
	}
	get errors() {
		return this.validationState.errors;
	}
	get parseErrors() {
		return this.validationState.parseErrors;
	}
	get errorSummary() {
		return this.validationState.errorSummary;
	}
	get pending() {
		return this.validationState.pending;
	}
	get valid() {
		return this.validationState.valid;
	}
	get invalid() {
		return this.validationState.invalid;
	}
	get dirty() {
		return this.nodeState.dirty;
	}
	get touched() {
		return this.nodeState.touched;
	}
	get disabled() {
		return this.nodeState.disabled;
	}
	get disabledReasons() {
		return this.nodeState.disabledReasons;
	}
	get hidden() {
		return this.nodeState.hidden;
	}
	get readonly() {
		return this.nodeState.readonly;
	}
	get formFieldBindings() {
		return this.nodeState.formFieldBindings;
	}
	get submitting() {
		return this.submitState.submitting;
	}
	get name() {
		return this.nodeState.name;
	}
	get max() {
		var _this$metadata;
		const maxKey = (_this$metadata = this.metadata(MAX)) === null || _this$metadata === void 0 ? void 0 : _this$metadata();
		return maxKey ? this.metadata(maxKey) : void 0;
	}
	get maxLength() {
		return this.metadata(MAX_LENGTH);
	}
	get min() {
		var _this$metadata2;
		const minKey = (_this$metadata2 = this.metadata(MIN)) === null || _this$metadata2 === void 0 ? void 0 : _this$metadata2();
		return minKey ? this.metadata(minKey) : void 0;
	}
	get minLength() {
		return this.metadata(MIN_LENGTH);
	}
	get pattern() {
		var _this$metadata3;
		return (_this$metadata3 = this.metadata(PATTERN)) !== null && _this$metadata3 !== void 0 ? _this$metadata3 : EMPTY;
	}
	get required() {
		var _this$metadata4;
		return (_this$metadata4 = this.metadata(REQUIRED)) !== null && _this$metadata4 !== void 0 ? _this$metadata4 : FALSE;
	}
	metadata(key) {
		return this.metadataState.get(key);
	}
	getError(kind) {
		return this.errors().find((e) => e.kind === kind);
	}
	hasMetadata(key) {
		return this.metadataState.has(key);
	}
	markAsTouched(options) {
		if (this.structure.isOrphaned()) return;
		untracked(() => {
			this.markAsTouchedInternal(options);
			this.flushSync();
		});
	}
	markAsTouchedInternal(options) {
		if (this.structure.isOrphaned()) return;
		if (this.validationState.shouldSkipValidation()) return;
		this.nodeState.markAsTouched();
		if (options === null || options === void 0 ? void 0 : options.skipDescendants) return;
		for (const child of this.structure.children()) child.markAsTouchedInternal();
	}
	markAsDirty() {
		this.nodeState.markAsDirty();
	}
	markAsPristine() {
		this.nodeState.markAsPristine();
	}
	markAsUntouched() {
		this.nodeState.markAsUntouched();
	}
	reset(value) {
		untracked(() => this._reset(value));
	}
	_reset(value) {
		var _this$pendingSync;
		(_this$pendingSync = this.pendingSync()) === null || _this$pendingSync === void 0 || _this$pendingSync.abort();
		if (value !== void 0) this.value.set(value);
		this.controlValue.rawSet(this.value());
		this.nodeState.markAsUntouched();
		this.nodeState.markAsPristine();
		for (const binding of this.formFieldBindings()) binding.reset();
		for (const child of this.structure.materializedChildren()) child._reset();
	}
	reloadValidation() {
		untracked(() => this._reloadValidation());
	}
	_reloadValidation() {
		const keys = this.logicNode.logic.getMetadataKeys();
		for (const key of keys) if (key[IS_ASYNC_VALIDATION_RESOURCE]) {
			var _resource$reload;
			const resource = this.metadata(key);
			(_resource$reload = resource.reload) === null || _resource$reload === void 0 || _resource$reload.call(resource);
		}
		for (const child of this.structure.children()) child._reloadValidation();
	}
	controlValueSignal() {
		const controlValue = linkedSignal(this.value);
		controlValue.rawSet = controlValue.set;
		controlValue.set = (newValue) => {
			controlValue.rawSet(newValue);
			this.markAsDirty();
			this.debounceSync();
		};
		const rawUpdate = controlValue.update;
		controlValue.update = (updateFn) => {
			rawUpdate(updateFn);
			this.markAsDirty();
			this.debounceSync();
		};
		return controlValue;
	}
	sync() {
		this.value.set(this.controlValue());
	}
	flushSync() {
		const pending = this.pendingSync();
		if (pending && !pending.signal.aborted) {
			pending.abort();
			this.sync();
		}
	}
	debounceSync() {
		var _this = this;
		return _asyncToGenerator(function* () {
			const debouncer = untracked(() => {
				var _this$pendingSync2;
				(_this$pendingSync2 = _this.pendingSync()) === null || _this$pendingSync2 === void 0 || _this$pendingSync2.abort();
				return _this.nodeState.debouncer();
			});
			if (debouncer) {
				const controller = new AbortController();
				const promise = debouncer(controller.signal);
				if (promise) {
					_this.pendingSync.set(controller);
					yield promise;
					if (controller.signal.aborted) return;
				}
			}
			if (_this.structure.isOrphaned()) return;
			_this.sync();
		})();
	}
	static newRoot(fieldManager, value, pathNode, adapter) {
		return adapter.newRoot(fieldManager, value, pathNode, adapter);
	}
	createStructure(options) {
		return options.kind === "root" ? new RootFieldNodeStructure(this, options.logic, options.fieldManager, options.value, this.newChild.bind(this)) : new ChildFieldNodeStructure(this, options.logic, options.parent, options.identityInParent, options.initialKeyInParent, this.newChild.bind(this));
	}
	newChild(key, trackingId, isArray) {
		let childPath;
		let childLogic;
		if (isArray) {
			childPath = this.pathNode.getChild(DYNAMIC);
			childLogic = this.structure.logic.getChild(DYNAMIC);
		} else {
			childPath = this.pathNode.getChild(key);
			childLogic = this.structure.logic.getChild(key);
		}
		return this.fieldAdapter.newChild({
			kind: "child",
			parent: this,
			pathNode: childPath,
			logic: childLogic,
			initialKeyInParent: key,
			identityInParent: trackingId,
			fieldAdapter: this.fieldAdapter
		});
	}
};
var EMPTY = computed(() => [], ...ngDevMode ? [{ debugName: "EMPTY" }] : []);
var FALSE = computed(() => false, ...ngDevMode ? [{ debugName: "FALSE" }] : []);
function firstInDom(a, b) {
	if (!a) return b;
	if (!b) return a;
	return a.element.compareDocumentPosition(b.element) & Node.DOCUMENT_POSITION_PRECEDING ? b : a;
}
var FieldNodeState = class {
	markAsTouched() {
		this.selfTouched.set(true);
	}
	markAsDirty() {
		this.selfDirty.set(true);
	}
	markAsPristine() {
		this.selfDirty.set(false);
	}
	markAsUntouched() {
		this.selfTouched.set(false);
	}
	constructor(node) {
		_defineProperty(this, "node", void 0);
		_defineProperty(this, "selfTouched", signal(false, ...ngDevMode ? [{ debugName: "selfTouched" }] : []));
		_defineProperty(this, "selfDirty", signal(false, ...ngDevMode ? [{ debugName: "selfDirty" }] : []));
		_defineProperty(this, "formFieldBindings", signal([], ...ngDevMode ? [{ debugName: "formFieldBindings" }] : []));
		_defineProperty(this, "dirty", computed(() => {
			const selfDirtyValue = this.selfDirty() && !this.isNonInteractive();
			return this.node.structure.reduceChildren(selfDirtyValue, (child, value) => value || child.nodeState.dirty(), shortCircuitTrue);
		}, ...ngDevMode ? [{ debugName: "dirty" }] : []));
		_defineProperty(this, "touched", computed(() => {
			const selfTouchedValue = this.selfTouched() && !this.isNonInteractive();
			return this.node.structure.reduceChildren(selfTouchedValue, (child, value) => value || child.nodeState.touched(), shortCircuitTrue);
		}, ...ngDevMode ? [{ debugName: "touched" }] : []));
		_defineProperty(this, "disabledReasons", computed(() => {
			var _this$node$structure$7, _this$node$structure$8;
			return [...(_this$node$structure$7 = (_this$node$structure$8 = this.node.structure.parent) === null || _this$node$structure$8 === void 0 ? void 0 : _this$node$structure$8.nodeState.disabledReasons()) !== null && _this$node$structure$7 !== void 0 ? _this$node$structure$7 : [], ...this.node.logicNode.logic.disabledReasons.compute(this.node.context)];
		}, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "disabledReasons" } : {}), {}, { equal: shallowArrayEquals })));
		_defineProperty(this, "disabled", computed(() => !!this.disabledReasons().length, ...ngDevMode ? [{ debugName: "disabled" }] : []));
		_defineProperty(this, "readonly", computed(() => {
			var _ref, _this$node$structure$9;
			return (_ref = ((_this$node$structure$9 = this.node.structure.parent) === null || _this$node$structure$9 === void 0 ? void 0 : _this$node$structure$9.nodeState.readonly()) || this.node.logicNode.logic.readonly.compute(this.node.context)) !== null && _ref !== void 0 ? _ref : false;
		}, ...ngDevMode ? [{ debugName: "readonly" }] : []));
		_defineProperty(this, "hidden", computed(() => {
			var _ref2, _this$node$structure$10;
			return (_ref2 = ((_this$node$structure$10 = this.node.structure.parent) === null || _this$node$structure$10 === void 0 ? void 0 : _this$node$structure$10.nodeState.hidden()) || this.node.logicNode.logic.hidden.compute(this.node.context)) !== null && _ref2 !== void 0 ? _ref2 : false;
		}, ...ngDevMode ? [{ debugName: "hidden" }] : []));
		_defineProperty(this, "name", computed(() => {
			const parent = this.node.structure.parent;
			if (!parent) return this.node.structure.fieldManager.rootName;
			return `${parent.name()}.${this.node.structure.keyInParent()}`;
		}, ...ngDevMode ? [{ debugName: "name" }] : []));
		_defineProperty(this, "debouncer", computed(() => {
			var _this$node$structure$11, _this$node$structure$12, _this$node$structure$13;
			if (this.node.logicNode.logic.hasMetadata(DEBOUNCER)) {
				const debouncer = this.node.logicNode.logic.getMetadata(DEBOUNCER).compute(this.node.context);
				if (debouncer) return (signal) => debouncer(this.node.context, signal);
			}
			return (_this$node$structure$11 = this.node.structure.parent) === null || _this$node$structure$11 === void 0 || (_this$node$structure$13 = (_this$node$structure$12 = _this$node$structure$11.nodeState).debouncer) === null || _this$node$structure$13 === void 0 ? void 0 : _this$node$structure$13.call(_this$node$structure$12);
		}, ...ngDevMode ? [{ debugName: "debouncer" }] : []));
		_defineProperty(this, "isNonInteractive", computed(() => this.hidden() || this.disabled() || this.readonly(), ...ngDevMode ? [{ debugName: "isNonInteractive" }] : []));
		this.node = node;
	}
};
var BasicFieldAdapter = class {
	newRoot(fieldManager, value, pathNode, adapter) {
		return new FieldNode({
			kind: "root",
			fieldManager,
			value,
			pathNode,
			logic: pathNode.builder.build(),
			fieldAdapter: adapter
		});
	}
	newChild(options) {
		return new FieldNode(options);
	}
	createNodeState(node) {
		return new FieldNodeState(node);
	}
	createValidationState(node) {
		return new FieldValidationState(node);
	}
	createStructure(node, options) {
		return node.createStructure(options);
	}
};
var FormFieldManager = class {
	constructor(injector, rootName, submitOptions) {
		_defineProperty(this, "injector", void 0);
		_defineProperty(this, "rootName", void 0);
		_defineProperty(this, "submitOptions", void 0);
		_defineProperty(this, "structures", /* @__PURE__ */ new Set());
		this.injector = injector;
		this.rootName = rootName !== null && rootName !== void 0 ? rootName : `${this.injector.get(APP_ID)}.form${nextFormId++}`;
		this.submitOptions = submitOptions;
	}
	createFieldManagementEffect(root) {
		effect(() => {
			const liveStructures = /* @__PURE__ */ new Set();
			this.markStructuresLive(root, liveStructures);
			for (const structure of this.structures) if (!liveStructures.has(structure)) {
				this.structures.delete(structure);
				untracked(() => structure.destroy());
			}
		}, { injector: this.injector });
	}
	markStructuresLive(structure, liveStructures) {
		liveStructures.add(structure);
		for (const child of structure.children()) this.markStructuresLive(child.structure, liveStructures);
	}
};
var nextFormId = 0;
var REGISTER_WEBMCP_FORM = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "REGISTER_WEBMCP_FORM" : "");
function normalizeFormArgs(args) {
	let model;
	let schema;
	let options;
	if (args.length === 3) [model, schema, options] = args;
	else if (args.length === 2) {
		if (isSchemaOrSchemaFn(args[1])) [model, schema] = args;
		else [model, options] = args;
	} else [model] = args;
	return [
		model,
		schema,
		options
	];
}
function form(...args) {
	var _options$injector, _options$adapter;
	const [model, schema, options] = normalizeFormArgs(args);
	const injector = (_options$injector = options === null || options === void 0 ? void 0 : options.injector) !== null && _options$injector !== void 0 ? _options$injector : inject(Injector);
	const pathNode = runInInjectionContext(injector, () => SchemaImpl.rootCompile(schema));
	const fieldManager = new FormFieldManager(injector, options === null || options === void 0 ? void 0 : options.name, options === null || options === void 0 ? void 0 : options.submission);
	const adapter = (_options$adapter = options === null || options === void 0 ? void 0 : options.adapter) !== null && _options$adapter !== void 0 ? _options$adapter : new BasicFieldAdapter();
	const fieldRoot = FieldNode.newRoot(fieldManager, model, pathNode, adapter);
	fieldManager.createFieldManagementEffect(fieldRoot.structure);
	const { experimentalWebMcpTool } = options !== null && options !== void 0 ? options : {};
	if (experimentalWebMcpTool) {
		const registerWebMcpForm = runInInjectionContext(injector, () => inject(REGISTER_WEBMCP_FORM, { optional: true }));
		if (registerWebMcpForm) runInInjectionContext(injector, () => registerWebMcpForm(fieldRoot.fieldTree, {
			name: experimentalWebMcpTool.name,
			description: experimentalWebMcpTool.description,
			annotations: experimentalWebMcpTool.annotations
		}));
		else if (typeof ngDevMode !== "undefined" && ngDevMode) throw new Error(`Cannot register form "${experimentalWebMcpTool.name}" as a WebMCP tool. Make sure to use \`provideExperimentalWebMcpForms()\` in your application bootstrap configuration.`);
	}
	return fieldRoot.fieldTree;
}
function applyEach(path, schema) {
	assertPathIsCurrent(path);
	const elementPath = FieldPathNode.unwrapFieldPath(path).getChild(DYNAMIC).fieldPathProxy;
	apply(elementPath, schema);
}
function apply(path, schema) {
	assertPathIsCurrent(path);
	FieldPathNode.unwrapFieldPath(path).mergeIn(SchemaImpl.create(schema));
}
function applyWhen(path, logic, schema) {
	assertPathIsCurrent(path);
	FieldPathNode.unwrapFieldPath(path).mergeIn(SchemaImpl.create(schema), {
		fn: logic,
		path
	});
}
function applyWhenValue(path, predicate, schema) {
	applyWhen(path, ({ value }) => predicate(value()), schema);
}
function submit(_x, _x2) {
	return _submit.apply(this, arguments);
}
function _submit() {
	_submit = _asyncToGenerator(function* (form, options) {
		var _options;
		const node = untracked(form);
		if (untracked(node.submitState.submitting)) return false;
		const field = options === void 0 ? node.structure.root.fieldProxy : form;
		const detail = {
			root: node.structure.root.fieldProxy,
			submitted: form
		};
		options = typeof options === "function" ? { action: options } : (_options = options) !== null && _options !== void 0 ? _options : node.structure.fieldManager.submitOptions;
		const action = options === null || options === void 0 ? void 0 : options.action;
		if (!action) throw new RuntimeError(1915, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot submit form with no submit action. Specify the action when creating the form, or as an additional argument to `submit()`.");
		node.markAsTouched();
		const onInvalid = options === null || options === void 0 ? void 0 : options.onInvalid;
		const shouldRun = shouldRunAction(node, options === null || options === void 0 ? void 0 : options.ignoreValidators);
		try {
			if (shouldRun) {
				node.submitState.selfSubmitting.set(true);
				const errors = yield untracked(() => action === null || action === void 0 ? void 0 : action(field, detail));
				errors && setSubmissionErrors(node, errors);
				return !errors || isArray(errors) && errors.length === 0;
			} else untracked(() => onInvalid === null || onInvalid === void 0 ? void 0 : onInvalid(field, detail));
			return false;
		} finally {
			node.submitState.selfSubmitting.set(false);
		}
	});
	return _submit.apply(this, arguments);
}
function schema(fn) {
	return SchemaImpl.create(fn);
}
function shouldRunAction(node, ignoreValidators) {
	switch (ignoreValidators) {
		case "all": return true;
		case "none": return untracked(node.valid);
		default: return !untracked(node.invalid);
	}
}
function setSubmissionErrors(submittedField, errors) {
	if (!isArray(errors)) errors = [errors];
	const errorsByField = /* @__PURE__ */ new Map();
	for (const error of errors) {
		const errorWithField = addDefaultField(error, submittedField.fieldTree);
		const field = errorWithField.fieldTree();
		let fieldErrors = errorsByField.get(field);
		if (!fieldErrors) {
			fieldErrors = [];
			errorsByField.set(field, fieldErrors);
		}
		fieldErrors.push(errorWithField);
	}
	for (const [field, fieldErrors] of errorsByField) field.submitState.submissionErrors.set(fieldErrors);
}
var CompatValidationError = class {
	constructor({ context, kind, control }) {
		_defineProperty(this, "kind", "compat");
		_defineProperty(this, "control", void 0);
		_defineProperty(this, "fieldTree", void 0);
		_defineProperty(this, "context", void 0);
		_defineProperty(this, "message", void 0);
		this.context = context;
		this.kind = kind;
		this.control = control;
	}
};
function signalErrorsToValidationErrors(errors) {
	if (errors.length === 0) return null;
	const errObj = {};
	for (const error of errors) errObj[error.kind] = error instanceof CompatValidationError ? error.context : error;
	return errObj;
}
function reactiveErrorsToSignalErrors(errors, control) {
	if (errors === null) return [];
	return Object.entries(errors).map(([kind, context]) => {
		return new CompatValidationError({
			context,
			kind,
			control
		});
	});
}
//#endregion
//#region node_modules/@angular/forms/fesm2022/signals.mjs
/**
* @license Angular v22.2.0
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var _InputValidityMonitor;
var _AnimationInputValidityMonitor;
var _FormField;
var _FormRoot;
function isFieldTree(value) {
	return typeof value === "function" && value[FIELD_TREE] === true;
}
var SIGNAL_FORMS_CONFIG = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "SIGNAL_FORMS_CONFIG" : "");
function provideSignalFormsConfig(config) {
	return [{
		provide: SIGNAL_FORMS_CONFIG,
		useValue: config
	}];
}
function disabled(path, configOrLogic) {
	assertPathIsCurrent(path);
	const pathNode = FieldPathNode.unwrapFieldPath(path);
	let logic;
	if (typeof configOrLogic === "function" || typeof configOrLogic === "string") logic = configOrLogic;
	else logic = configOrLogic === null || configOrLogic === void 0 ? void 0 : configOrLogic.when;
	pathNode.builder.addDisabledReasonRule((ctx) => {
		let result = true;
		if (typeof logic === "string") result = logic;
		else if (logic) result = logic(ctx);
		if (typeof result === "string") return {
			fieldTree: ctx.fieldTree,
			message: result
		};
		return result ? { fieldTree: ctx.fieldTree } : void 0;
	});
}
function hidden(path, configOrLogic) {
	var _configOrLogic$when;
	assertPathIsCurrent(path);
	const pathNode = FieldPathNode.unwrapFieldPath(path);
	const logic = typeof configOrLogic === "function" ? configOrLogic : (_configOrLogic$when = configOrLogic === null || configOrLogic === void 0 ? void 0 : configOrLogic.when) !== null && _configOrLogic$when !== void 0 ? _configOrLogic$when : (() => true);
	pathNode.builder.addHiddenRule(logic);
}
function readonly(path, configOrLogic) {
	var _configOrLogic$when2;
	assertPathIsCurrent(path);
	const pathNode = FieldPathNode.unwrapFieldPath(path);
	const logic = typeof configOrLogic === "function" ? configOrLogic : (_configOrLogic$when2 = configOrLogic === null || configOrLogic === void 0 ? void 0 : configOrLogic.when) !== null && _configOrLogic$when2 !== void 0 ? _configOrLogic$when2 : (() => true);
	pathNode.builder.addReadonlyRule(logic);
}
function getLengthOrSize(value) {
	const v = value;
	return typeof v.length === "number" ? v.length : v.size;
}
function getOption(opt, ctx) {
	return opt instanceof Function ? opt(ctx) : opt;
}
function isEmpty(value) {
	if (typeof value === "number") return isNaN(value);
	return value === "" || value === false || value == null;
}
function normalizeErrors(error) {
	if (error === void 0) return [];
	if (Array.isArray(error)) return error;
	return [error];
}
function validate(path, logic) {
	assertPathIsCurrent(path);
	FieldPathNode.unwrapFieldPath(path).builder.addSyncErrorRule((ctx) => {
		return addDefaultField(logic(ctx), ctx.fieldTree);
	});
}
function requiredError(options) {
	return new RequiredValidationError(options);
}
function minError(min, options) {
	return new MinValidationError(min, options);
}
function minDateError(minDate, options) {
	return new MinDateValidationError(minDate, options);
}
function maxError(max, options) {
	return new MaxValidationError(max, options);
}
function maxDateError(maxDate, options) {
	return new MaxDateValidationError(maxDate, options);
}
function minLengthError(minLength, options) {
	return new MinLengthValidationError(minLength, options);
}
function maxLengthError(maxLength, options) {
	return new MaxLengthValidationError(maxLength, options);
}
function patternError(pattern, options) {
	return new PatternValidationError(pattern, options);
}
function emailError(options) {
	return new EmailValidationError(options);
}
var BaseNgValidationError = class {
	constructor(options) {
		_defineProperty(this, "__brand", void 0);
		_defineProperty(this, "kind", "");
		_defineProperty(this, "fieldTree", void 0);
		_defineProperty(this, "message", void 0);
		if (options) Object.assign(this, options);
	}
};
var RequiredValidationError = class extends BaseNgValidationError {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "kind", "required");
	}
};
var MinValidationError = class extends BaseNgValidationError {
	constructor(min, options) {
		super(options);
		_defineProperty(this, "min", void 0);
		_defineProperty(this, "kind", "min");
		this.min = min;
	}
};
var MinDateValidationError = class extends BaseNgValidationError {
	constructor(minDate, options) {
		super(options);
		_defineProperty(this, "minDate", void 0);
		_defineProperty(this, "kind", "minDate");
		this.minDate = minDate;
	}
};
var MaxValidationError = class extends BaseNgValidationError {
	constructor(max, options) {
		super(options);
		_defineProperty(this, "max", void 0);
		_defineProperty(this, "kind", "max");
		this.max = max;
	}
};
var MaxDateValidationError = class extends BaseNgValidationError {
	constructor(maxDate, options) {
		super(options);
		_defineProperty(this, "maxDate", void 0);
		_defineProperty(this, "kind", "maxDate");
		this.maxDate = maxDate;
	}
};
var MinLengthValidationError = class extends BaseNgValidationError {
	constructor(minLength, options) {
		super(options);
		_defineProperty(this, "minLength", void 0);
		_defineProperty(this, "kind", "minLength");
		this.minLength = minLength;
	}
};
var MaxLengthValidationError = class extends BaseNgValidationError {
	constructor(maxLength, options) {
		super(options);
		_defineProperty(this, "maxLength", void 0);
		_defineProperty(this, "kind", "maxLength");
		this.maxLength = maxLength;
	}
};
var PatternValidationError = class extends BaseNgValidationError {
	constructor(pattern, options) {
		super(options);
		_defineProperty(this, "pattern", void 0);
		_defineProperty(this, "kind", "pattern");
		this.pattern = pattern;
	}
};
var EmailValidationError = class extends BaseNgValidationError {
	constructor(..._args2) {
		super(..._args2);
		_defineProperty(this, "kind", "email");
	}
};
var NativeInputParseError = class extends BaseNgValidationError {
	constructor(..._args3) {
		super(..._args3);
		_defineProperty(this, "kind", "parse");
	}
};
var NgValidationError = BaseNgValidationError;
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function email(path, config) {
	validate(path, (ctx) => {
		if ((config === null || config === void 0 ? void 0 : config.when) && !config.when(ctx)) return;
		if (isEmpty(ctx.value())) return;
		if (!EMAIL_REGEXP.test(ctx.value())) {
			if (config === null || config === void 0 ? void 0 : config.error) return getOption(config.error, ctx);
			else return emailError({ message: getOption(config === null || config === void 0 ? void 0 : config.message, ctx) });
		}
	});
}
function max(path, maxValue, config) {
	const MAX_MEMO = createMetadataKey();
	metadata(path, MAX_MEMO, (ctx) => {
		if ((config === null || config === void 0 ? void 0 : config.when) && !config.when(ctx)) return;
		return typeof maxValue === "function" ? maxValue(ctx) : maxValue;
	});
	metadata(path, MAX_NUMBER, ({ state }) => state.metadata(MAX_MEMO)());
	metadata(path, MAX, () => MAX_NUMBER);
	validate(path, (ctx) => {
		const value = ctx.value();
		if (value === null || Number.isNaN(value)) return;
		const max = ctx.state.metadata(MAX_MEMO)();
		if (max === void 0 || Number.isNaN(max)) return;
		if (value > max) {
			if (config === null || config === void 0 ? void 0 : config.error) return getOption(config.error, ctx);
			else return maxError(max, { message: getOption(config === null || config === void 0 ? void 0 : config.message, ctx) });
		}
	});
}
function maxDate(path, maxDateValue, config) {
	const MAX_MEMO = createMetadataKey();
	metadata(path, MAX_MEMO, (ctx) => {
		if ((config === null || config === void 0 ? void 0 : config.when) && !config.when(ctx)) return;
		return typeof maxDateValue === "function" ? maxDateValue(ctx) : maxDateValue;
	});
	metadata(path, MAX_DATE, ({ state }) => state.metadata(MAX_MEMO)());
	metadata(path, MAX, () => MAX_DATE);
	validate(path, (ctx) => {
		const value = ctx.value();
		if (value === null || Number.isNaN(value.getTime())) return;
		const max = ctx.state.metadata(MAX_MEMO)();
		if (max === void 0 || Number.isNaN(max.getTime())) return;
		if (value > max) {
			if (config === null || config === void 0 ? void 0 : config.error) return getOption(config.error, ctx);
			else return maxDateError(max, { message: getOption(config === null || config === void 0 ? void 0 : config.message, ctx) });
		}
	});
}
function maxLength(path, maxLength, config) {
	const MAX_LENGTH_MEMO = metadata(path, createMetadataKey(), (ctx) => {
		if ((config === null || config === void 0 ? void 0 : config.when) && !config.when(ctx)) return;
		return typeof maxLength === "number" ? maxLength : maxLength(ctx);
	});
	metadata(path, MAX_LENGTH, ({ state }) => state.metadata(MAX_LENGTH_MEMO)());
	validate(path, (ctx) => {
		if (isEmpty(ctx.value())) return;
		const maxLength = ctx.state.metadata(MAX_LENGTH_MEMO)();
		if (maxLength === void 0) return;
		if (getLengthOrSize(ctx.value()) > maxLength) {
			if (config === null || config === void 0 ? void 0 : config.error) return getOption(config.error, ctx);
			else return maxLengthError(maxLength, { message: getOption(config === null || config === void 0 ? void 0 : config.message, ctx) });
		}
	});
}
function min(path, minValue, config) {
	const MIN_MEMO = createMetadataKey();
	metadata(path, MIN_MEMO, (ctx) => {
		if ((config === null || config === void 0 ? void 0 : config.when) && !config.when(ctx)) return;
		return typeof minValue === "function" ? minValue(ctx) : minValue;
	});
	metadata(path, MIN_NUMBER, ({ state }) => state.metadata(MIN_MEMO)());
	metadata(path, MIN, () => MIN_NUMBER);
	validate(path, (ctx) => {
		const value = ctx.value();
		if (value === null || Number.isNaN(value)) return;
		const min = ctx.state.metadata(MIN_MEMO)();
		if (min === void 0 || Number.isNaN(min)) return;
		if (value < min) {
			if (config === null || config === void 0 ? void 0 : config.error) return getOption(config.error, ctx);
			else return minError(min, { message: getOption(config === null || config === void 0 ? void 0 : config.message, ctx) });
		}
	});
}
function minDate(path, minDateValue, config) {
	const MIN_MEMO = createMetadataKey();
	metadata(path, MIN_MEMO, (ctx) => {
		if ((config === null || config === void 0 ? void 0 : config.when) && !config.when(ctx)) return;
		return typeof minDateValue === "function" ? minDateValue(ctx) : minDateValue;
	});
	metadata(path, MIN_DATE, ({ state }) => state.metadata(MIN_MEMO)());
	metadata(path, MIN, () => MIN_DATE);
	validate(path, (ctx) => {
		const value = ctx.value();
		if (value === null || Number.isNaN(value.getTime())) return;
		const min = ctx.state.metadata(MIN_MEMO)();
		if (min === void 0 || Number.isNaN(min.getTime())) return;
		if (value < min) {
			if (config === null || config === void 0 ? void 0 : config.error) return getOption(config.error, ctx);
			else return minDateError(min, { message: getOption(config === null || config === void 0 ? void 0 : config.message, ctx) });
		}
	});
}
function minLength(path, minLength, config) {
	const MIN_LENGTH_MEMO = metadata(path, createMetadataKey(), (ctx) => {
		if ((config === null || config === void 0 ? void 0 : config.when) && !config.when(ctx)) return;
		return typeof minLength === "number" ? minLength : minLength(ctx);
	});
	metadata(path, MIN_LENGTH, ({ state }) => state.metadata(MIN_LENGTH_MEMO)());
	validate(path, (ctx) => {
		if (isEmpty(ctx.value())) return;
		const minLength = ctx.state.metadata(MIN_LENGTH_MEMO)();
		if (minLength === void 0) return;
		if (getLengthOrSize(ctx.value()) < minLength) {
			if (config === null || config === void 0 ? void 0 : config.error) return getOption(config.error, ctx);
			else return minLengthError(minLength, { message: getOption(config === null || config === void 0 ? void 0 : config.message, ctx) });
		}
	});
}
function pattern(path, pattern, config) {
	const PATTERN_MEMO = metadata(path, createMetadataKey(), (ctx) => {
		if ((config === null || config === void 0 ? void 0 : config.when) && !config.when(ctx)) return;
		return pattern instanceof RegExp ? pattern : pattern(ctx);
	});
	metadata(path, PATTERN, ({ state }) => state.metadata(PATTERN_MEMO)());
	validate(path, (ctx) => {
		if (isEmpty(ctx.value())) return;
		const pattern = ctx.state.metadata(PATTERN_MEMO)();
		if (pattern === void 0) return;
		if (!pattern.test(ctx.value())) {
			if (config === null || config === void 0 ? void 0 : config.error) return getOption(config.error, ctx);
			else return patternError(pattern, { message: getOption(config === null || config === void 0 ? void 0 : config.message, ctx) });
		}
	});
}
function required(path, config) {
	const REQUIRED_MEMO = metadata(path, createMetadataKey(), (ctx) => (config === null || config === void 0 ? void 0 : config.when) ? config.when(ctx) : true);
	metadata(path, REQUIRED, ({ state }) => state.metadata(REQUIRED_MEMO)());
	validate(path, (ctx) => {
		if (ctx.state.metadata(REQUIRED_MEMO)() && isEmpty(ctx.value())) {
			if (config === null || config === void 0 ? void 0 : config.error) return getOption(config.error, ctx);
			else return requiredError({ message: getOption(config === null || config === void 0 ? void 0 : config.message, ctx) });
		}
	});
}
function validateAsync(path, opts) {
	assertPathIsCurrent(path);
	const pathNode = FieldPathNode.unwrapFieldPath(path);
	const RESOURCE = createManagedMetadataKey((_state, params) => {
		if (opts.debounce !== void 0) {
			const debouncedResource = debounced(() => params(), opts.debounce);
			const wrappedParams = computed(() => chain(debouncedResource), ...ngDevMode ? [{ debugName: "wrappedParams" }] : []);
			return opts.factory(wrappedParams);
		}
		return opts.factory(params);
	});
	RESOURCE[IS_ASYNC_VALIDATION_RESOURCE] = true;
	metadata(path, RESOURCE, (ctx) => {
		const validationState = ctx.stateOf(path).validationState;
		if (validationState.shouldSkipValidation() || !validationState.syncValid()) return;
		if (opts.when && !opts.when(ctx)) return;
		return opts.params(ctx);
	});
	pathNode.builder.addAsyncErrorRule((ctx) => {
		const res = ctx.state.metadata(RESOURCE);
		let errors;
		switch (res.status()) {
			case "idle": return;
			case "loading":
			case "reloading": return "pending";
			case "resolved":
			case "local":
				if (!res.hasValue()) return;
				errors = opts.onSuccess(res.value(), ctx);
				return addDefaultField(errors, ctx.fieldTree);
			case "error":
				errors = opts.onError(res.error(), ctx);
				return addDefaultField(errors, ctx.fieldTree);
		}
	});
}
function validateTree(path, logic) {
	assertPathIsCurrent(path);
	FieldPathNode.unwrapFieldPath(path).builder.addSyncTreeErrorRule((ctx) => addDefaultField(logic(ctx), ctx.fieldTree));
}
function validateStandardSchema(path, schema) {
	const VALIDATOR_MEMO = metadata(path, createMetadataKey(), (ctx) => {
		const resolvedSchema = typeof schema === "function" ? schema(ctx) : schema;
		return resolvedSchema ? resolvedSchema["~standard"].validate(ctx.value()) : void 0;
	});
	validateTree(path, ({ state, fieldTreeOf }) => {
		var _result$issues$map, _result$issues;
		const result = state.metadata(VALIDATOR_MEMO)();
		if (!result || isPromise(result)) return [];
		return (_result$issues$map = result === null || result === void 0 || (_result$issues = result.issues) === null || _result$issues === void 0 ? void 0 : _result$issues.map((issue) => standardIssueToFormTreeError(fieldTreeOf(path), issue))) !== null && _result$issues$map !== void 0 ? _result$issues$map : [];
	});
	validateAsync(path, {
		params: ({ state }) => {
			const result = state.metadata(VALIDATOR_MEMO)();
			return result && isPromise(result) ? result : void 0;
		},
		factory: (params) => {
			return resource({
				params,
				loader: function() {
					var _ref = _asyncToGenerator(function* ({ params }) {
						var _await$params$issues, _await$params;
						return (_await$params$issues = (_await$params = yield params) === null || _await$params === void 0 ? void 0 : _await$params.issues) !== null && _await$params$issues !== void 0 ? _await$params$issues : [];
					});
					return function loader(_x) {
						return _ref.apply(this, arguments);
					};
				}()
			});
		},
		onSuccess: (issues, { fieldTreeOf }) => {
			return issues.map((issue) => standardIssueToFormTreeError(fieldTreeOf(path), issue));
		},
		onError: () => {}
	});
}
function standardSchemaError(issue, options) {
	return new StandardSchemaValidationError(issue, options);
}
function standardIssueToFormTreeError(fieldTree, issue) {
	var _issue$path;
	let target = fieldTree;
	for (const pathPart of (_issue$path = issue.path) !== null && _issue$path !== void 0 ? _issue$path : []) {
		const pathKey = typeof pathPart === "object" ? pathPart.key : pathPart;
		target = target[pathKey];
	}
	return addDefaultField(standardSchemaError(issue, { message: issue.message }), target);
}
var StandardSchemaValidationError = class extends BaseNgValidationError {
	constructor(issue, options) {
		super(options);
		_defineProperty(this, "issue", void 0);
		_defineProperty(this, "kind", "standardSchema");
		this.issue = issue;
	}
};
function validateHttp(path, opts) {
	validateAsync(path, {
		params: opts.request,
		debounce: opts.debounce,
		factory: (request) => httpResource(request, opts.options),
		onSuccess: opts.onSuccess,
		onError: opts.onError,
		when: opts.when
	});
}
function debounce(path, config) {
	assertPathIsCurrent(path);
	const pathNode = FieldPathNode.unwrapFieldPath(path);
	const debouncer = normalizeDebouncer(config);
	pathNode.builder.addMetadataRule(DEBOUNCER, () => debouncer);
}
function normalizeDebouncer(debouncer) {
	if (typeof debouncer === "function") return debouncer;
	if (debouncer === "blur") return debounceUntilBlur();
	if (debouncer > 0) return debounceForDuration(debouncer);
	return immediate;
}
function debounceForDuration(durationInMilliseconds) {
	return (_context, abortSignal) => {
		return new Promise((resolve) => {
			let timeoutId;
			const onAbort = () => {
				clearTimeout(timeoutId);
				resolve();
			};
			timeoutId = setTimeout(() => {
				abortSignal.removeEventListener("abort", onAbort);
				resolve();
			}, durationInMilliseconds);
			abortSignal.addEventListener("abort", onAbort, { once: true });
		});
	};
}
function debounceUntilBlur() {
	return (_context, abortSignal) => {
		return new Promise((resolve) => {
			abortSignal.addEventListener("abort", () => resolve(), { once: true });
		});
	};
}
function immediate() {}
function createParser(getValue, setValue, parse) {
	const errors = linkedSignal(_objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "errors" } : {}), {}, {
		source: getValue,
		computation: () => [],
		equal: shallowArrayEquals
	}));
	const setRawValue = (rawValue) => {
		const result = parse(rawValue);
		errors.set(normalizeErrors(result.error));
		if (result.value !== void 0) setValue(result.value);
		errors.set(normalizeErrors(result.error));
	};
	const reset = () => {
		errors.set([]);
	};
	return {
		errors: errors.asReadonly(),
		setRawValue,
		reset
	};
}
function transformedValue(value, options) {
	const { parse, format } = options;
	const parser = createParser(value, value.set, parse);
	const rawValue = linkedSignal(() => format(value()), ...ngDevMode ? [{ debugName: "rawValue" }] : []);
	const result = rawValue;
	result.parseErrors = parser.errors;
	const originalSet = result.set.bind(result);
	const integration = inject(ɵFORM_CONTROL_INTEGRATION, {
		self: true,
		optional: true
	});
	if (integration) {
		integration.setParseErrors(parser.errors);
		integration.onReset = (resetValue) => {
			parser.reset();
			const modelValue = resetValue !== void 0 ? resetValue : value();
			originalSet(format(modelValue));
		};
	}
	result.set = (newRawValue) => {
		parser.setRawValue(newRawValue);
		originalSet(newRawValue);
	};
	result.update = (updateFn) => {
		result.set(updateFn(rawValue()));
	};
	return result;
}
var InteropNgControl = class {
	constructor(field) {
		_defineProperty(this, "field", void 0);
		_defineProperty(this, "control", this);
		_defineProperty(this, "valueAccessor", null);
		this.field = field;
	}
	get value() {
		return this.field().controlValue();
	}
	get valid() {
		return this.field().valid();
	}
	get invalid() {
		return this.field().invalid();
	}
	get pending() {
		return this.field().pending();
	}
	get disabled() {
		return this.field().disabled();
	}
	get enabled() {
		return !this.field().disabled();
	}
	get errors() {
		return signalErrorsToValidationErrors(this.field().errors());
	}
	get pristine() {
		return !this.field().dirty();
	}
	get dirty() {
		return this.field().dirty();
	}
	get touched() {
		return this.field().touched();
	}
	get untouched() {
		return !this.field().touched();
	}
	get status() {
		if (this.field().disabled()) return "DISABLED";
		if (this.field().valid()) return "VALID";
		if (this.field().invalid()) return "INVALID";
		if (this.field().pending()) return "PENDING";
		throw new RuntimeError(1910, ngDevMode && "Unknown form control status");
	}
	hasValidator(validator) {
		if (validator === Validators.required) return this.field().required();
		return false;
	}
	updateValueAndValidity() {}
};
var FIELD_STATE_KEY_TO_CONTROL_BINDING = {
	disabled: "disabled",
	disabledReasons: "disabledReasons",
	dirty: "dirty",
	errors: "errors",
	hidden: "hidden",
	invalid: "invalid",
	max: "max",
	maxLength: "maxLength",
	min: "min",
	minLength: "minLength",
	name: "name",
	pattern: "pattern",
	pending: "pending",
	readonly: "readonly",
	required: "required",
	touched: "touched"
};
var CONTROL_BINDING_TO_FIELD_STATE_KEY = /* @__PURE__ */ (() => {
	const map = {};
	for (const key of Object.keys(FIELD_STATE_KEY_TO_CONTROL_BINDING)) map[FIELD_STATE_KEY_TO_CONTROL_BINDING[key]] = key;
	return map;
})();
function readFieldStateBindingValue(fieldState, key) {
	var _fieldState$property;
	return (_fieldState$property = fieldState[CONTROL_BINDING_TO_FIELD_STATE_KEY[key]]) === null || _fieldState$property === void 0 ? void 0 : _fieldState$property.call(fieldState);
}
var CONTROL_BINDING_NAMES = /* @__PURE__ */ (() => Object.values(FIELD_STATE_KEY_TO_CONTROL_BINDING))();
function createBindings() {
	return {};
}
function bindingUpdated(bindings, key, value) {
	if (bindings[key] !== value) {
		bindings[key] = value;
		return true;
	}
	return false;
}
function getNativeControlValue(element, currentValue, validityMonitor) {
	let modelValue;
	if (isInput(element) && validityMonitor.isBadInput(element)) return { error: new NativeInputParseError() };
	switch (element.type) {
		case "checkbox": return { value: element.checked };
		case "number":
		case "range":
		case "datetime-local":
			modelValue = untracked(currentValue);
			if (typeof modelValue === "number" || modelValue === null) return { value: element.value === "" ? null : element.valueAsNumber };
			break;
		case "date":
		case "month":
		case "time":
		case "week":
			modelValue = untracked(currentValue);
			if (modelValue === null || modelValue instanceof Date) return { value: element.valueAsDate };
			else if (typeof modelValue === "number") return { value: element.valueAsNumber };
	}
	if (element.tagName === "INPUT" && element.type === "text") {
		var _modelValue;
		(_modelValue = modelValue) !== null && _modelValue !== void 0 || (modelValue = untracked(currentValue));
		if (typeof modelValue === "number" || modelValue === null) {
			if (element.value === "") return { value: null };
			const parsed = Number(element.value);
			if (Number.isNaN(parsed)) return { error: new NativeInputParseError() };
			return { value: parsed };
		}
	}
	return { value: element.value };
}
function setNativeControlValue(element, value) {
	switch (element.type) {
		case "checkbox":
			element.checked = value;
			return;
		case "radio":
			element.checked = value === element.value;
			return;
		case "number":
		case "range":
		case "datetime-local":
			if (typeof value === "number") {
				setNativeNumberControlValue(element, value);
				return;
			} else if (value === null) {
				element.value = "";
				return;
			}
			break;
		case "date":
		case "month":
		case "time":
		case "week": if (value === null || value instanceof Date) {
			element.valueAsDate = value;
			return;
		} else if (typeof value === "number") {
			setNativeNumberControlValue(element, value);
			return;
		}
	}
	if (element.tagName === "INPUT" && element.type === "text") {
		if (typeof value === "number") {
			element.value = isNaN(value) ? "" : String(value);
			return;
		}
		if (value === null) {
			if (typeof ngDevMode !== "undefined" && ngDevMode) console.warn(formatRuntimeError(1921, `The text input ${element.name} received a null value. Text inputs should use empty strings to represent null values.  The input's value will be set to an empty string instead.`));
			element.value = "";
			return;
		}
	}
	element.value = value;
}
function setNativeNumberControlValue(element, value) {
	if (isNaN(value)) element.value = "";
	else element.valueAsNumber = value;
}
function isInput(element) {
	return element.tagName === "INPUT";
}
function inputRequiresValidityTracking(input) {
	return input.type === "date" || input.type === "datetime-local" || input.type === "month" || input.type === "time" || input.type === "week";
}
function formatDateForInput(date, type) {
	const year = date.getUTCFullYear();
	const month = String(date.getUTCMonth() + 1).padStart(2, "0");
	if (type === "month") return `${year}-${month}`;
	return `${year}-${month}-${String(date.getUTCDate()).padStart(2, "0")}`;
}
function formatDateForMinMax(name, value, type) {
	if (value instanceof Date && (name === "min" || name === "max") && (type === "date" || type === "month")) return formatDateForInput(value, type);
	return value;
}
function customControlCreate(host, parent) {
	host.listenToCustomControlModel((value) => parent.state().controlValue.set(value));
	host.listenToCustomControlOutput("touch", () => parent.state().markAsTouched());
	parent.registerAsBinding(host.customControl);
	const bindings = createBindings();
	return () => {
		const state = parent.state();
		const controlValue = state.controlValue();
		if (bindingUpdated(bindings, "controlValue", controlValue)) host.setCustomControlModelInput(controlValue);
		for (const name of CONTROL_BINDING_NAMES) {
			let value;
			if (name === "errors") value = parent.errors();
			else value = readFieldStateBindingValue(state, name);
			if (bindingUpdated(bindings, name, value)) {
				host.setInputOnDirectives(name, value);
				if (parent.elementAcceptsNativeProperty(name) && !host.customControlHasInput(name)) {
					const domValue = formatDateForMinMax(name, value, parent.nativeFormElement.type);
					setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, domValue);
				}
			}
		}
	};
}
function isValidatorObject(v) {
	return typeof v === "object" && v !== null;
}
function cvaControlCreate(host, parent) {
	const bindings = createBindings();
	parent.controlValueAccessor.registerOnChange((value) => {
		bindings["controlValue"] = value;
		parent.state().controlValue.set(value);
	});
	parent.controlValueAccessor.registerOnTouched(() => parent.state().markAsTouched());
	const legacyValidators = parent.injector.get(NG_VALIDATORS, null, {
		optional: true,
		self: true
	});
	if (legacyValidators) {
		let version;
		for (const v of legacyValidators) if (isValidatorObject(v) && v.registerOnValidatorChange) {
			var _version;
			(_version = version) !== null && _version !== void 0 || (version = signal(0));
			v.registerOnValidatorChange(() => {
				version.update((n) => n + 1);
			});
		}
		const validatorFns = legacyValidators.map((v) => typeof v === "function" ? v : v.validate.bind(v));
		const mergedValidator = Validators.compose(validatorFns);
		const parseErrors = computed(() => {
			version === null || version === void 0 || version();
			return reactiveErrorsToSignalErrors(mergedValidator ? mergedValidator(parent.interopNgControl.control) : null, parent.interopNgControl.control);
		}, ...ngDevMode ? [{ debugName: "parseErrors" }] : []);
		parent.parseErrorsSource.set(parseErrors);
	}
	parent.registerAsBinding({ reset: () => {
		const value = parent.state().value();
		bindings["controlValue"] = value;
		untracked(() => parent.controlValueAccessor.writeValue(value));
	} });
	return () => {
		const fieldState = parent.state();
		const controlValue = fieldState.controlValue();
		if (bindingUpdated(bindings, "controlValue", controlValue)) untracked(() => parent.controlValueAccessor.writeValue(controlValue));
		for (const name of CONTROL_BINDING_NAMES) {
			const value = readFieldStateBindingValue(fieldState, name);
			if (bindingUpdated(bindings, name, value)) {
				const propertyWasSet = host.setInputOnDirectives(name, value, name === "name" ? isDefinedPredicate : void 0);
				if (name === "disabled" && parent.controlValueAccessor.setDisabledState) untracked(() => parent.controlValueAccessor.setDisabledState(value));
				else if (!propertyWasSet && parent.elementAcceptsNativeProperty(name)) setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, value);
			}
		}
	};
}
function isDefinedPredicate(value) {
	return value == null;
}
function observeSelectMutations(select, onMutation, destroyRef) {
	if (typeof MutationObserver !== "function") return;
	const observer = new MutationObserver((mutations) => {
		if (mutations.some((m) => isRelevantSelectMutation(m))) onMutation();
	});
	observer.observe(select, {
		attributes: true,
		attributeFilter: ["value"],
		characterData: true,
		childList: true,
		subtree: true
	});
	destroyRef.onDestroy(() => observer.disconnect());
}
function isRelevantSelectMutation(mutation) {
	if (mutation.type === "childList" || mutation.type === "characterData") {
		if (mutation.target instanceof Comment) return false;
		for (const node of mutation.addedNodes) if (!(node instanceof Comment)) return true;
		for (const node of mutation.removedNodes) if (!(node instanceof Comment)) return true;
		return false;
	}
	if (mutation.type === "attributes" && mutation.target instanceof HTMLOptionElement) return true;
	return false;
}
function nativeControlCreate(host, parent, parseErrorsSource, validityMonitor) {
	let updateMode = false;
	const input = parent.nativeFormElement;
	const parser = createParser(() => parent.state().value(), (rawValue) => parent.state().controlValue.set(rawValue), (_rawValue) => getNativeControlValue(input, parent.state().value, validityMonitor));
	parseErrorsSource.set(parser.errors);
	parent.onReset = () => {
		parser.reset();
		const value = parent.state().value();
		bindings["controlValue"] = value;
		setNativeControlValue(input, value);
	};
	host.listenToDom("input", () => parser.setRawValue(void 0));
	host.listenToDom("blur", () => parent.state().markAsTouched());
	if (isInput(input) && inputRequiresValidityTracking(input)) validityMonitor.watchValidity(parent.destroyRef, input, () => parser.setRawValue(void 0));
	parent.registerAsBinding();
	if (input.tagName === "SELECT") observeSelectMutations(input, () => {
		if (!updateMode) return;
		input.value = parent.state().controlValue();
	}, parent.destroyRef);
	const bindings = createBindings();
	return () => {
		const state = parent.state();
		for (const name of CONTROL_BINDING_NAMES) {
			const value = readFieldStateBindingValue(state, name);
			if (bindingUpdated(bindings, name, value)) {
				host.setInputOnDirectives(name, value);
				if (parent.elementAcceptsNativeProperty(name)) {
					const domValue = formatDateForMinMax(name, value, input.type);
					setNativeDomProperty(parent.renderer, input, name, domValue);
				}
			}
		}
		const controlValue = state.controlValue();
		const controlValueChanged = bindingUpdated(bindings, "controlValue", controlValue);
		const radioValueChanged = input.type === "radio" && bindingUpdated(bindings, "radioValue", input.value);
		if (controlValueChanged || radioValueChanged) setNativeControlValue(input, controlValue);
		updateMode = true;
	};
}
var InputValidityMonitor = class {};
_InputValidityMonitor = InputValidityMonitor;
_defineProperty(InputValidityMonitor, "ɵfac", function InputValidityMonitor_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _InputValidityMonitor)();
});
_defineProperty(InputValidityMonitor, "ɵprov", /*@__PURE__*/ ɵɵdefineInjectable({
	token: _InputValidityMonitor,
	factory: (__ngFactoryType__) => {
		return AnimationInputValidityMonitor.ɵfac(__ngFactoryType__);
	},
	providedIn: "root"
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputValidityMonitor, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useClass: forwardRef(() => AnimationInputValidityMonitor)
		}]
	}], null, null);
})();
var AnimationInputValidityMonitor = class extends InputValidityMonitor {
	constructor(..._args4) {
		super(..._args4);
		_defineProperty(this, "document", inject(DOCUMENT));
		_defineProperty(this, "cspNonce", inject(CSP_NONCE, { optional: true }));
		_defineProperty(this, "injectedStyles", /* @__PURE__ */ new WeakMap());
	}
	watchValidity(destroyRef, element, callback) {
		const rootNode = element.getRootNode();
		if (!this.injectedStyles.has(rootNode)) this.injectedStyles.set(rootNode, this.createTransitionStyle(rootNode));
		const onAnimationStart = (event) => {
			const animationEvent = event;
			if (animationEvent.animationName === "ng-valid" || animationEvent.animationName === "ng-invalid") callback();
		};
		element.addEventListener("animationstart", onAnimationStart);
		destroyRef.onDestroy(() => {
			element.removeEventListener("animationstart", onAnimationStart);
		});
	}
	isBadInput(element) {
		var _element$validity$bad, _element$validity;
		return (_element$validity$bad = (_element$validity = element.validity) === null || _element$validity === void 0 ? void 0 : _element$validity.badInput) !== null && _element$validity$bad !== void 0 ? _element$validity$bad : false;
	}
	createTransitionStyle(rootNode) {
		const element = this.document.createElement("style");
		if (this.cspNonce) element.nonce = this.cspNonce;
		element.textContent = `
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `;
		if (rootNode.nodeType === 9) {
			var _rootNode$head;
			(_rootNode$head = rootNode.head) === null || _rootNode$head === void 0 || _rootNode$head.appendChild(element);
		} else rootNode.appendChild(element);
		return element;
	}
	ngOnDestroy() {
		var _this$injectedStyles$;
		(_this$injectedStyles$ = this.injectedStyles.get(this.document)) === null || _this$injectedStyles$ === void 0 || _this$injectedStyles$.remove();
	}
};
_AnimationInputValidityMonitor = AnimationInputValidityMonitor;
_defineProperty(AnimationInputValidityMonitor, "ɵfac", /*@__PURE__*/ (() => {
	let ɵAnimationInputValidityMonitor_BaseFactory = void 0;
	return function AnimationInputValidityMonitor_Factory(__ngFactoryType__) {
		return (ɵAnimationInputValidityMonitor_BaseFactory || (ɵAnimationInputValidityMonitor_BaseFactory = ɵɵgetInheritedFactory(_AnimationInputValidityMonitor)))(__ngFactoryType__ || _AnimationInputValidityMonitor);
	};
})());
_defineProperty(AnimationInputValidityMonitor, "ɵprov", /*@__PURE__*/ ɵɵdefineInjectable({
	token: _AnimationInputValidityMonitor,
	factory: _AnimationInputValidityMonitor.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationInputValidityMonitor, [{ type: Injectable }], null, null);
})();
var ɵNgFieldDirective = Symbol();
var FORM_FIELD = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "FORM_FIELD" : "");
var FormField = class {
	constructor() {
		_defineProperty(this, "field", input.required(_objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "field" } : {}), {}, { alias: "formField" })));
		_defineProperty(this, "state", computed(() => this.field()(), ...ngDevMode ? [{ debugName: "state" }] : []));
		_defineProperty(this, "renderer", inject(Renderer2));
		_defineProperty(this, "destroyRef", inject(DestroyRef));
		_defineProperty(this, "injector", inject(Injector));
		_defineProperty(this, "element", inject(ElementRef).nativeElement);
		_defineProperty(this, "elementIsNativeFormElement", isNativeFormElement(this.element));
		_defineProperty(this, "elementAcceptsTextualValues", isTextualFormElement(this.element));
		_defineProperty(this, "_elementAcceptsMinMax", void 0);
		_defineProperty(this, "nativeFormElement", this.elementIsNativeFormElement ? this.element : void 0);
		_defineProperty(this, "focuser", (options) => this.element.focus(options));
		_defineProperty(this, "controlValueAccessors", inject(NG_VALUE_ACCESSOR, {
			optional: true,
			self: true
		}));
		_defineProperty(this, "config", inject(SIGNAL_FORMS_CONFIG, { optional: true }));
		_defineProperty(this, "validityMonitor", inject(InputValidityMonitor));
		_defineProperty(this, "parseErrorsSource", signal(void 0, ...ngDevMode ? [{ debugName: "parseErrorsSource" }] : []));
		_defineProperty(this, "_interopNgControl", void 0);
		_defineProperty(this, "parseErrors", computed(() => {
			var _this$parseErrorsSour, _this$parseErrorsSour2;
			return (_this$parseErrorsSour = (_this$parseErrorsSour2 = this.parseErrorsSource()) === null || _this$parseErrorsSour2 === void 0 ? void 0 : _this$parseErrorsSour2().map((err) => _objectSpread2(_objectSpread2({}, err), {}, {
				fieldTree: untracked(this.state).fieldTree,
				formField: this
			}))) !== null && _this$parseErrorsSour !== void 0 ? _this$parseErrorsSour : [];
		}, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "parseErrors" } : {}), {}, { equal: shallowArrayEquals })));
		_defineProperty(this, "errors", computed(() => this.state().errors().filter((err) => !err.formField || err.formField === this), _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "errors" } : {}), {}, { equal: shallowArrayEquals })));
		_defineProperty(this, "isFieldBinding", false);
		_defineProperty(this, "resetter", () => {});
		_defineProperty(this, "parseErrorsResetCallback", void 0);
		_defineProperty(this, ɵNgFieldDirective, void 0);
		_defineProperty(this, "ɵngControlUpdate", void 0);
	}
	get interopNgControl() {
		var _this$_interopNgContr;
		return (_this$_interopNgContr = this._interopNgControl) !== null && _this$_interopNgContr !== void 0 ? _this$_interopNgContr : this._interopNgControl = new InteropNgControl(this.state);
	}
	setParseErrors(source) {
		this.parseErrorsSource.set(source);
	}
	set onReset(callback) {
		this.parseErrorsResetCallback = callback;
	}
	get onReset() {
		return this.parseErrorsResetCallback;
	}
	get controlValueAccessor() {
		var _selectValueAccessor2;
		if (!this.controlValueAccessors || this.controlValueAccessors.length === 0) {
			var _this$interopNgContro, _this$interopNgContro2;
			return (_this$interopNgContro = (_this$interopNgContro2 = this.interopNgControl) === null || _this$interopNgContro2 === void 0 ? void 0 : _this$interopNgContro2.valueAccessor) !== null && _this$interopNgContro !== void 0 ? _this$interopNgContro : void 0;
		}
		return (_selectValueAccessor2 = selectValueAccessor(this.interopNgControl, this.controlValueAccessors)) !== null && _selectValueAccessor2 !== void 0 ? _selectValueAccessor2 : void 0;
	}
	installClassBindingEffect() {
		var _this$config$classes, _this$config;
		const classes = Object.entries((_this$config$classes = (_this$config = this.config) === null || _this$config === void 0 ? void 0 : _this$config.classes) !== null && _this$config$classes !== void 0 ? _this$config$classes : {}).map(([className, computation]) => [className, computed(() => computation(this))]);
		if (classes.length === 0) return;
		const bindings = createBindings();
		afterRenderEffect({ write: () => {
			for (const [className, computation] of classes) {
				const active = computation();
				if (bindingUpdated(bindings, className, active)) {
					if (active) this.renderer.addClass(this.element, className);
					else this.renderer.removeClass(this.element, className);
				}
			}
		} }, { injector: this.injector });
	}
	focus(options) {
		this.focuser(options);
	}
	reset() {
		var _this$parseErrorsRese;
		this.resetter();
		(_this$parseErrorsRese = this.parseErrorsResetCallback) === null || _this$parseErrorsRese === void 0 || _this$parseErrorsRese.call(this, this.state().value());
	}
	registerAsBinding(bindingOptions) {
		if (this.isFieldBinding) throw new RuntimeError(1913, typeof ngDevMode !== "undefined" && ngDevMode && "FormField already registered as a binding");
		this.isFieldBinding = true;
		this.installClassBindingEffect();
		if (bindingOptions === null || bindingOptions === void 0 ? void 0 : bindingOptions.focus) this.focuser = (focusOptions) => bindingOptions.focus(focusOptions);
		if (bindingOptions === null || bindingOptions === void 0 ? void 0 : bindingOptions.reset) this.resetter = () => bindingOptions.reset();
		effect((onCleanup) => {
			const fieldNode = this.state();
			fieldNode.nodeState.formFieldBindings.update((controls) => [...controls, this]);
			onCleanup(() => {
				fieldNode.nodeState.formFieldBindings.update((controls) => controls.filter((c) => c !== this));
			});
		}, { injector: this.injector });
		if (typeof ngDevMode !== "undefined" && ngDevMode) effect(() => {
			const fieldNode = this.state();
			if (fieldNode.hidden()) {
				const path = fieldNode.structure.pathKeys().join(".") || "<root>";
				console.warn(formatRuntimeError(1916, `Field '${path}' is hidden but is being rendered. Hidden fields should be removed from the DOM using @if.`));
			}
		}, { injector: this.injector });
	}
	ɵngControlCreate(host) {
		if (host.hasPassThrough) return;
		if (this.controlValueAccessor) this.ɵngControlUpdate = cvaControlCreate(host, this);
		else if (host.customControl) this.ɵngControlUpdate = customControlCreate(host, this);
		else if (this.elementIsNativeFormElement) this.ɵngControlUpdate = nativeControlCreate(host, this, this.parseErrorsSource, this.validityMonitor);
		else throw new RuntimeError(1914, typeof ngDevMode !== "undefined" && ngDevMode && `${host.descriptor} is an invalid [formField] directive host. The host must be a native form control (such as <input>', '<select>', or '<textarea>') or a custom form control with a 'value' or 'checked' model.`);
	}
	elementAcceptsNativeProperty(key) {
		if (!this.elementIsNativeFormElement) return false;
		switch (key) {
			case "min":
			case "max":
				var _this$_elementAccepts;
				return (_this$_elementAccepts = this._elementAcceptsMinMax) !== null && _this$_elementAccepts !== void 0 ? _this$_elementAccepts : this._elementAcceptsMinMax = elementAcceptsMinMax(this.element);
			case "minLength":
			case "maxLength": return this.elementAcceptsTextualValues;
			case "disabled":
			case "required":
			case "readonly":
			case "name": return true;
			default: return false;
		}
	}
};
_FormField = FormField;
_defineProperty(FormField, "ɵfac", function FormField_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _FormField)();
});
_defineProperty(FormField, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _FormField,
	selectors: [[
		"",
		"formField",
		""
	]],
	inputs: { field: [
		1,
		"formField",
		"field"
	] },
	exportAs: ["formField"],
	features: [ɵɵProvidersFeature([
		{
			provide: FORM_FIELD,
			useExisting: _FormField
		},
		{
			provide: NgControl,
			useFactory: () => {
				return inject(_FormField).interopNgControl;
			}
		},
		{
			provide: ɵFORM_CONTROL_INTEGRATION,
			useFactory: () => {
				return inject(FORM_FIELD, { self: true });
			}
		}
	]), ɵɵControlFeature("formField")]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormField, [{
		type: Directive,
		args: [{
			selector: "[formField]",
			exportAs: "formField",
			providers: [
				{
					provide: FORM_FIELD,
					useExisting: FormField
				},
				{
					provide: NgControl,
					useFactory: () => inject(FormField).interopNgControl
				},
				{
					provide: ɵFORM_CONTROL_INTEGRATION,
					useFactory: () => inject(FORM_FIELD, { self: true })
				}
			]
		}]
	}], null, { field: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "formField",
			required: true
		}]
	}] });
})();
var FormRoot = class {
	constructor() {
		_defineProperty(this, "fieldTree", input.required(_objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "fieldTree" } : {}), {}, { alias: "formRoot" })));
	}
	onSubmit(event) {
		event.preventDefault();
		untracked(() => {
			const fieldTree = this.fieldTree();
			if (fieldTree().structure.fieldManager.submitOptions) submit(fieldTree);
		});
	}
};
_FormRoot = FormRoot;
_defineProperty(FormRoot, "ɵfac", function FormRoot_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _FormRoot)();
});
_defineProperty(FormRoot, "ɵdir", /*@__PURE__*/ ɵɵdefineDirective({
	type: _FormRoot,
	selectors: [[
		"form",
		"formRoot",
		""
	]],
	hostAttrs: ["novalidate", ""],
	hostBindings: function FormRoot_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("submit", function FormRoot_submit_HostBindingHandler($event) {
			return ctx.onSubmit($event);
		});
	},
	inputs: { fieldTree: [
		1,
		"formRoot",
		"fieldTree"
	] }
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormRoot, [{
		type: Directive,
		args: [{
			selector: "form[formRoot]",
			host: {
				"novalidate": "",
				"(submit)": "onSubmit($event)"
			}
		}]
	}], null, { fieldTree: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "formRoot",
			required: true
		}]
	}] });
})();
var registerWebMcpForm = (formTree, options) => {
	const injector = inject(Injector);
	return new Promise((resolve, reject) => {
		effect(() => {
			untracked(() => {
				initWebMcpForm(formTree, options, injector).then(resolve, reject);
			});
		});
	});
};
function initWebMcpForm(_x3, _x4, _x5) {
	return _initWebMcpForm.apply(this, arguments);
}
function _initWebMcpForm() {
	_initWebMcpForm = _asyncToGenerator(function* (formTree, options, injector) {
		const node = formTree();
		const inputSchema = inferSchemaFromFieldNode(node);
		if (!inputSchema) throw new Error(`Could not accurately infer WebMCP schema for form "${options.name}". Ensure that the form model does not contain null, undefined, empty arrays, or unsupported types.`);
		yield declareExperimentalWebMcpTool({
			name: options.name,
			description: options.description,
			inputSchema,
			annotations: _objectSpread2(_objectSpread2({}, options.annotations), {}, {
				readOnlyHint: false,
				untrustedContentHint: false
			}),
			execute: function() {
				var _ref2 = _asyncToGenerator(function* (args) {
					node.value.set(args);
					if (yield submit(formTree)) return { content: [{
						type: "text",
						text: "Form submitted successfully."
					}] };
					else return { content: [{
						type: "text",
						text: `Form submission failed:\n${node.errorSummary().map((err) => {
							const fieldName = err.fieldTree().structure.pathKeys().join(".");
							return `${fieldName ? `${fieldName}: ` : ""}${err.message || err.kind}`;
						}).join("\n")}`
					}] };
				});
				return function execute(_x2) {
					return _ref2.apply(this, arguments);
				};
			}()
		}, injector);
	});
	return _initWebMcpForm.apply(this, arguments);
}
function inferSchemaFromFieldNode(node) {
	const value = node.value();
	if (typeof value === "string") return { type: "string" };
	if (typeof value === "number") return { type: "number" };
	if (typeof value === "boolean") return { type: "boolean" };
	if (value === null || value === void 0) return void 0;
	if (Array.isArray(value)) {
		if (value.length === 0) return void 0;
		const firstChild = node.structure.getChild("0");
		if (!firstChild) return void 0;
		const itemSchema = inferSchemaFromFieldNode(firstChild);
		if (!itemSchema) return void 0;
		return {
			type: "array",
			items: itemSchema
		};
	}
	if (typeof value === "object") {
		const properties = {};
		const required = [];
		const children = node.structure.children();
		for (const child of children) {
			const key = child.keyInParent();
			const childSchema = inferSchemaFromFieldNode(child);
			if (!childSchema) return void 0;
			properties[key] = childSchema;
			if (child.required()) required.push(key.toString());
		}
		return {
			type: "object",
			properties,
			required,
			additionalProperties: false
		};
	}
}
function provideExperimentalWebMcpForms() {
	return makeEnvironmentProviders([{
		provide: REGISTER_WEBMCP_FORM,
		useValue: registerWebMcpForm
	}]);
}
//#endregion
export { BaseNgValidationError, EmailValidationError, FORM_FIELD, FormField, FormRoot, IS_ASYNC_VALIDATION_RESOURCE, MAX, MAX_DATE, MAX_LENGTH, MAX_NUMBER, MIN, MIN_DATE, MIN_LENGTH, MIN_NUMBER, MaxDateValidationError, MaxLengthValidationError, MaxValidationError, MetadataKey, MetadataReducer, MinDateValidationError, MinLengthValidationError, MinValidationError, NativeInputParseError, NgValidationError, PATTERN, PatternValidationError, REQUIRED, RequiredValidationError, StandardSchemaValidationError, apply, applyEach, applyWhen, applyWhenValue, createLimitSelectionKey, createManagedMetadataKey, createMetadataKey, debounce, disabled, email, emailError, form, hidden, isFieldTree, max, maxDate, maxDateError, maxError, maxLength, maxLengthError, metadata, min, minDate, minDateError, minError, minLength, minLengthError, pattern, patternError, provideExperimentalWebMcpForms, provideSignalFormsConfig, readonly, required, requiredError, schema, standardSchemaError, submit, transformedValue, validate, validateAsync, validateHttp, validateStandardSchema, validateTree, ɵNgFieldDirective };
