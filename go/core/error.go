package core

type OpenaqPlatformError struct {
	IsOpenaqPlatformError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewOpenaqPlatformError(code string, msg string, ctx *Context) *OpenaqPlatformError {
	return &OpenaqPlatformError{
		IsOpenaqPlatformError: true,
		Sdk:              "OpenaqPlatform",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *OpenaqPlatformError) Error() string {
	return e.Msg
}
