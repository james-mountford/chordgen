#include <string>
#include <iostream>
#include <filesystem>
namespace fs = std::filesystem;

int main() {
    std::string path = "..\\..\\soundfiles\\wav";
    for (const auto & entry : fs::directory_iterator(path)) {
        std::cout << entry << std::endl;
    }

    std::string random_input;
    std::cin >> random_input;
}