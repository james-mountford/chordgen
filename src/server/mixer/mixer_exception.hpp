#ifndef MIXER_EXCEPTION_HPP
#define MIXER_EXCEPTION_HPP

#include <stdexcept>
#include <string>

// Custom lib error in case mixing fails for some reason
class MixerError : public std::runtime_error {
    public:
    explicit MixerError(const std::string& msg)
        : std::runtime_error(msg) {}
};

#endif