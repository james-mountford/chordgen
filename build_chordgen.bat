@echo off
echo Building chordgen extension...

rem optional: clean build folder
rem rmdir /s /q build
rem mkdir build

cl /LD /std:c++20 /EHsc ^
  /I "C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.12_3.12.2800.0_x64__qbz5n2kfra8p0\Include" ^
  /I "C:\Users\jimmy\Desktop\code\chordgen-ui\venv_chordgen\Lib\site-packages\pybind11\include" ^
  /I "src\chordgen\include" ^
  /Fo"build\\" ^
  /Fd"build\vc143.pdb" ^
  src\chordgen\bindings\chordgen_pybind.cpp ^
  src\chordgen\src\mixer.cpp ^
  src\chordgen\src\wav.cpp ^
  /link ^
  /OUT:src\chordgen\python\chordgen\chordgen.pyd ^
  /LIBPATH:"C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.12_3.12.2800.0_x64__qbz5n2kfra8p0\libs" ^
  python312.lib

echo Done.